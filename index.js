
// The res.type(type) method in Express.js is used to set the 
// Content-Type HTTP header to the MIME type specified by the type parameter. 
// This method can be useful for ensuring that the response is 
// correctly interpreted by the client based on the type of content being sent.


const express = require('express');
const app = express();
const port = 3000;

app.get('/html', (req, res) => {
  res.type('html');
  res.send('<h1>Hello World</h1>'); // Sends an HTML response
});


app.get('/json', (req, res) => {
  res.type('json');
  res.send({ message: 'Hello World' }); // Sends a JSON response
});

app.get('/text', (req, res) => {
  res.type('text');
  res.send('Hello World'); // Sends a plain text response
});

app.get('/xml', (req, res) => {
//  console.log( "hello type",res.type('hello'))  it send null ....
res.type('xml')
console.log(res.type('xml'))
  res.send('<message>Hello World</message>'); // Sends an XML response
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

