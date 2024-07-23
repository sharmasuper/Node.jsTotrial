// To serve a favicon in an Express.js application, you can use the serve-favicon middleware. 
// This middleware helps serve the favicon efficiently and correctly.

// Import necessary modules
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

// Create an Express application
const app = express();

// Use the serve-favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


