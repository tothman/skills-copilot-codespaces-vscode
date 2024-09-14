// Create web server with express
const express = require('express');
const app = express();

// Load the comments data
const comments = require('./comments.json');

// Create an endpoint for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});


