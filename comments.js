// Create web server
// 1. Create a web server
// 2. Get the comments from the comments.json file
// 3. Send the comments to the client

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Get the comments from the comments.json file
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// 3. Send the comments to the client
app.get('/comments', function (req, res) {
  res.send(comments);
});

// 4. Listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});