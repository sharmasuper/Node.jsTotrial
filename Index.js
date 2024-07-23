// Partial responses in Express.js can be achieved using the express-partial-response middleware, 
// which allows clients to request only specific parts of a resource. This can be particularly useful 
// for optimizing performance and reducing the amount of 
// data sent over the network.

const express = require('express');
const partialResponse = require('express-partial-response');

const app = express();
const port = 3000;

// Sample data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

// Use partial response middleware
app.use(partialResponse());

// Route to get users
app.get('/users', (req, res) => {
  res.json(users);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      stack: req.app.get('env') === 'development' ? err.stack : {}
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});














