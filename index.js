const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'application/json', // Sets the Content-Type header to application/json
    'X-Custom-Header': 'CustomHeaderValue' // Sets a custom header
  });
 // res.json({ message: 'Hello World' }); // Sends a JSON response
 res.send({message:"hello world"})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
