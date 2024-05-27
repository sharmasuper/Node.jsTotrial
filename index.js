// It looks like there might be a typo in your request. If you meant the res.status() method in
//  Express.js, it is used to set the HTTP status code for the response. This method is often used 
//  in conjunction with other response methods like res.send(),
//  res.json(), or res.end() to send the response with the specified status code.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('OK'); // Sets status to 200 and sends the response 'OK'
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found'); // Sets status to 404 and sends the response 'Not Found'
});

app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Internal Server Error' }); // Sets status to 500 and sends a JSON response
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






