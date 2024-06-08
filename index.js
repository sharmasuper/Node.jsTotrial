const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Define the custom HTML template engine
app.engine('html', (filePath, options, callback) => {
  // Read the HTML file from the filesystem
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) return callback(err);

    // Replace placeholders with actual values
    let rendered = content.replace(/{{\s*([^{}\s]+)\s*}}/g, (match, p1) => {
      return options[p1] || '';
    });

    return callback(null, rendered);
  });
});

// Set the view engine to use the custom HTML engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Custom HTML Template Engine', message: 'Hello, world!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
