const express = require('express');
const errorhandler = require('errorhandler');
const notifier = require('node-notifier');

const app = express();
const port = 3000;

// Custom error notification function
function errorNotification(err, str, req) {
  const title = 'Error in ' + req.method + ' ' + req.url;

  notifier.notify({
    title: title,
    message: str
  });
}

// Use the errorhandler middleware only in development environment
if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler({ log: errorNotification }));
}

// Sample route that throws an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

// Sample route that does not throw an error
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
