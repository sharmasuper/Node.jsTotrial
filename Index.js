// Import the necessary modules
const express = require('express');

// Create an Express application
const app = express();

// Create the response-time middleware
const responseTime = (req, res, next) => {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log(`${req.method} ${req.url} [${res.statusCode}] - ${elapsedTimeInMs.toFixed(3)} ms`);
  });

  next();
};

// Use the response-time middleware
app.use(responseTime);

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
