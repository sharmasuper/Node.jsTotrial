const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/user/:id', (req, res) => {
  // Deprecated way
  const userId = req.param('id');
  const token = req.param('token', 'defaultToken123');
   // Providing a default value if token is not present
   //it means  id is not present when we use default token 
  res.send(`User ID: ${userId}, Token: ${token}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
