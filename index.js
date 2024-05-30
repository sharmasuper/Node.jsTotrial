const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  if (req.is('application/json')) {
    res.json({"hello":"frist"});
  } else if (req.is('application/x-www-form-urlencoded')) {
    res.send('Received URL-encoded data');
  } else {
    res.send('Received other type of data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
