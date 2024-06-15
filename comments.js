// Create web server
// Create a route that accepts POST requests to /comments
// The route should read the request body and parse it as JSON
// The JSON body should be an object with a single key, comment
// The value of the comment key should be a string
// The server should append the comment to the comments array
// The server should respond with a 201 status code and an empty response body

const express = require('express');
const app = express();

const comments = [];

app.use(express.json());

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.status(201).send();
});

app.listen(3000);
