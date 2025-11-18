# Bloggo
Bloggo is a server-rendered blog prototype built with Express.js and EJS to practice routing, templating, and dynamic page rendering. Since the focus of this project is to explore server-side rendering and request handling, all contents are stored in memory for now (no database).

This project was created as a part of the third capstone project for the [Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by Angela Yu on Udemy.

## Features
- Allows the user to view, create, edit, and delete blogs.
- Clean and responsive UI.
- Built with Express.js, EJS, and vanilla CSS.

## API Endpoints
Below are the routes that power this simple blog system. Since the project does not use a database, all posts are stored temporarily in memory.
### GET /
Renders the homepage and displays all blog posts.
### GET /create
Returns the page containing the form used to create a new blog post.
### GET /blogs/:id
Displays a single blog post based on its id. This route renders the blog detail page using EJS.
### POST /add
Creates a new blog post using the data submitted from the form in the /create endpoint.
```
{
  "title": "My First Blog",
  "content": "Hello World!",
}
```
### POST /blogs/:id/delete
Deletes the blog post with the given id.
### POST /blogs/:id/edit
Returns the edit form for the blog post with the given id. The form is pre-filled with the post's existing content.
### POST /blogs/:id/update
Updates the blog post with the given id using submitted form data in the /edit enpoint.


## Tech Stack
| Component | Technology |
|----------|------------|
| Backend | Node.js + Express.js |
| Frontend | HTML + CSS + JS |
| Templating | EJS |
| Rendering | Server-side Rendering (SSR) |
| Deployment | Render |

## Getting Started
### Live Demo
The demo is live on Render and is accessible via the following link: [https://bloggo-rlpz.onrender.com/](https://bloggo-rlpz.onrender.com)

### Local Setup
- Clone the repository:
    - ```git clone https://github.com/userVallen/Bloggo.git```
    - ```cd Bloggo```

- Install the dependencies:
    - ```npm install```

- Start the server:
    - ```npm start```

Then you can check the web app on http://localhost:3000

## How it Works
This project uses a server-side rendering (SSR) architecture:

* **Routing**: Express.js handles different routes for creating, viewing, editing, and deleting blog posts.
* **Templating**: Pages are rendered using EJS templates, allowing dynamic contents to be injected into HTML on the server.
* **State Management**: Blog posts are stored in-memory as a JavaScript array. This enables full CRUD functionality without requiring a database.
* **Form Actions**: User actions (such as adding or editing a post) are performed through HTML forms that submit POST requests to the server.

Because data is stored in memory, blog posts are **not persistent** and reset when the server restarts. This setup is ideal for demonstrating routing and templating logic without database complexity.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
