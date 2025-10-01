# Web Blog Application using EJS

This project was created as a part of the third capstone project for the [Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by Angela Yu on Udemy.

The main goal of the project is to develop a web blog application using Node.js, Express.js, and EJS (Embedded JavaScript). Users can create, delete, and edit posts, each of which consists a simple title and content in form of a text. This reflects the basic implementations of establishing a working backend server alongside frontend EJS files, including handling different endpoints using GET and POST HTTP methods.

A DELETE method, which is a more typical method used for deleting an object, can actually be incorporated in the web application's deleting operation. However, to keep the focus of this project grounded to the usage of EJS and HTML forms (which only supports GET and POST), the deletion procedure is supported by the POST method instead of using HTTP (non-HTML) methods with the help of AJAX or external libraries.

As such, database integration for data persistence is also ignored temporarily. Naturally, this means that the created posts live temporarily in the RAM and will get removed once the server restarts.
