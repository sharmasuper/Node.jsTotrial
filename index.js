// Configuring Express.js to work behind proxies involves setting up trust proxy 
// settings to ensure that Express.js correctly handles requests forwarded by a proxy server. 
// Here's an example of how to configure Express.js to work behind proxies:


const express = require('express');
const app = express();

// Trust proxy settings
app.set('trust proxy', true);

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route that logs client IP address
app.get('/', (req, res) => {
  const clientIP = req.ip; // Use req.ip to get the client's IP address
  console.log('Client IP Address:', clientIP);
  res.send('Hello from Express!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






