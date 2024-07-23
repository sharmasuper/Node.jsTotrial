// The vhost middleware in Express.js allows you to handle multiple virtual hosts with a 
// single Express application. This is useful when you want to serve different applications or
//  routes based on the subdomain or domain.


// Import necessary modules
const express = require('express');
const vhost = require('vhost');

// Create main app
const app = express();

// Create subdomain apps
const app1 = express();
const app2 = express();

// Define middleware or routes for subdomain apps
app1.use((req, res) => {
  res.send('Hello from app1.example.com!');
});

app2.use((req, res) => {
  res.send('Hello from app2.example.com!');
});

// Use vhost middleware to route requests to the appropriate subdomain app
app.use(vhost('app1.example.com', app1));
app.use(vhost('app2.example.com', app2));

// Define a fallback route for non-matching requests
app.use((req, res) => {
  res.send('Hello from the main app!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});







