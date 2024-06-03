// The express.text([options]) middleware in Express.js is used to parse incoming request bodies as text.
//  This middleware is particularly useful when you
//  need to handle plain text data sent in the body of HTTP requests.

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Use express.text() middleware to parse text/plain content type
app.use(express.text());

// Example route to handle POST request with text data
app.post('/textdata', (req, res) => {
    const textData = req.body;  
    console.log('Received text data:', textData);
    res.send(`Received text data: ${textData}`); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
















