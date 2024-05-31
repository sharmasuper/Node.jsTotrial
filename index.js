const express = require('express');
const app = express();

// Middleware to trust the first proxy
app.set('proxy2', 1);

// Middleware to log the client's IP addresses
app.use((req, res, next) => {
  console.log('Client IP addresses:', req.ips);
  next();
});

// Route handling requests
app.get('/', (req, res) => {
  res.send(`Hello! Your IP addresses are ${req.ips.join(', ')}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
