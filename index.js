import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs });
  console.log(blogs);
});

app.get("/create", (req, res) => {
  let randomTitlePlaceholder = "";
  let randomContentPlaceholder = "";
  if (titlePlaceholders) {
    randomTitlePlaceholder =
      titlePlaceholders[Math.floor(Math.random() * titlePlaceholders.length)];
    randomContentPlaceholder =
      contentPlaceholders[
        Math.floor(Math.random() * contentPlaceholders.length)
      ];
  }

  res.render("create.ejs", {
    titlePlaceholder: randomTitlePlaceholder,
    contentPlaceholder: randomContentPlaceholder,
    existingTitle: null,
    existingContent: null,
    action: "/add",
  });
});

app.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;

  const blog = blogs.find((b) => b.id === blogId);
  if (!blog) {
    return res.status(404).send("Blog not found");
  }

  res.render("blog.ejs", { blog });
});

app.post("/add", (req, res) => {
  blogs.push({
    id: uuidv4(),
    title: req.body["blogTitle"],
    content: req.body["blogContent"],
  });
  res.redirect("/");
});

app.post("/blogs/:id/delete", (req, res) => {
  blogs = blogs.filter((item) => item.id !== req.params.id);
  res.redirect("/");
});

// THIS should only check if the blog exists
app.post("/blogs/:id/edit", (req, res) => {
  let blogIndex = blogs.findIndex((item) => item.id === req.params.id);
  let blog = blogs[blogIndex];

  res.render("create.ejs", {
    existingTitle: blog.title,
    existingContent: blog.content,
    action: `/blogs/${blog.id}/update`,
  });
});

// How to pass the id? Then change the blog from here!
app.post("/blogs/:id/update", (req, res) => {
  let blogIndex = blogs.findIndex((item) => item.id === req.params.id);
  if (blogIndex !== -1) {
    blogs[blogIndex] = {
      ...blogs[blogIndex],
      title: req.body["blogTitle"],
      content: req.body["blogContent"],
    };
  } else {
    console.log("Error finding blog.");
  }

  res.redirect("/");
});

let blogs = [];

const titlePlaceholders = [
  "Give your blog a title",
  "What should we call it?",
  "What should the title be?",
  "What's this about?",
  "Let the readers know what this blog's about",
];

const contentPlaceholders = [
  "What's on your mind?",
  "Share your story",
  "Tell them all about it",
  "Time to tell your story",
  "Share your thoughts",
  "Don't worry about word count",
  "Your creativity's the limit",
];
