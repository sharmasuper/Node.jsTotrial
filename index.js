const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendStatus(200); // Sends a 200 OK status with the message "OK"
});

app.get('/not-found', (req, res) => {
  res.sendStatus(404); // Sends a 404 Not Found status with the message "Not Found"
});

app.get('/error', (req, res) => {
  res.sendStatus(500); // Sends a 500 Internal Server Error status with the message "Internal Server Error"
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
