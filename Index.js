// cls-rtracer is a middleware for Express.js that provides request tracing, making it easier to track
//  and log requests across the entire application, including asynchronous operations. 
// It uses Continuation-Local Storage (CLS) to maintain context for the lifetime of a request.

// const express = require('express');
// const rTracer = require('cls-rtracer');

// const app = express();

// // Apply the rTracer middleware
// app.use(rTracer.expressMiddleware());

// app.get('/', (req, res) => {
//   // Retrieve the request identifier
//   const requestId = rTracer.id();
//   res.send(`Request ID: ${requestId}`);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require('express');
const rTracer = require('cls-rtracer');
const winston = require('winston');

const app = express();

// Create a winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      const requestId = rTracer.id();
      return `${timestamp} [${level}] [${requestId}] ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console()
  ]
});

// Apply the rTracer middleware
app.use(rTracer.expressMiddleware());

app.get('/', (req, res) => {
  // Log a message with the request ID
  logger.info('Handling request');
  res.send('Hello, World!');
});

app.listen(3000, () => {
  logger.info('Server is running on port 3000');
});
