const express = require('express');
const app = express();

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Built-in middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Sample route to demonstrate JSON parsing
app.post('/data', (req, res) => {
  console.log(req.body); // The parsed JSON data
  res.send('JSON data received');
});

// Sample route to demonstrate URL-encoded body parsing
app.post('/form', (req, res) => {
  console.log(req.body); // The parsed form data
  res.send('Form data received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
