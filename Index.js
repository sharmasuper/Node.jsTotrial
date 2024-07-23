// In an Express.js application, you can handle errors and send JSON responses by creating a custom 
// error-handling middleware. This middleware will catch any errors thrown in your routes or other 
// middleware and respond with a JSON object
//  containing the error details.
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example route that triggers an error
app.get('/', (req, res, next) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    next(error); // Pass error to the error handler
  }
});

// Example route that triggers a different type of error
app.get('/notfound', (req, res, next) => {
  const error = new Error('Resource not found');
  error.status = 404;
  next(error);
});

// General error-handling middleware
app.use((err, req, res, next) => {
  // Set the response status code
  const statusCode = err.status || 500;
  res.status(statusCode);

  // Send JSON response
  res.json({
    error: {
      message: err.message,
      status: statusCode,
      // Include stack trace in development mode
      ...(app.get('env') === 'development' ? { stack: err.stack } : {})
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});












