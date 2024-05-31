const express = require('express');
const app = express();

// Middleware to trust the first proxy
// app.set('trust proxy', true);

// Middleware to log the client's IP addresses
// app.use((req, res, next) => {
//   console.log('Client IP addresses:', req.ips);
//   next();
// });

// Route handling requests
app.get('/', (req, res) => {
  res.send(`Hello! Your IP addresses are ${req.method}`);
});

// output Client IP addresses: [ '203.0.113.1', '198.51.100.1' ]

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
