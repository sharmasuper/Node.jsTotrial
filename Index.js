// Import necessary modules
// The serve-index middleware in Express.js is used to serve directory listings.
//  This can be useful for displaying the contents of a directory in the browser. 
//  Here's an example of how to use serve-index in an Express.js application:

// Import necessary modules
const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

// Create an Express application
const app = express();

// Use serve-index middleware to serve directory listings
app.use('/public', express.static(path.join(__dirname, 'public')), serveIndex(path.join(__dirname, 'public'), { 'icons': true }));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Go to /public to see the directory listing');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



