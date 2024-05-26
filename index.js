const express = require('express');
const app = express();

// Middleware to add custom headers
app.use((req, res, next) => {
  res.set('X-Custom-Header', 'CustomHeaderValue');
  res.set('Content-Type', 'application/json');
  next();
});

// Route to demonstrate res.get()
app.get('/headers', (req, res) => {
  const customHeader = res.get('X-Custom-Header');
  const contentType = res.get('Content-Type');

  res.json({
    customHeader: customHeader,
    contentType: contentType,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
