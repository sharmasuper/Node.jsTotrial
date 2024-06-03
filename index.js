// The express.urlencoded([options]) middleware in Express.js is used to parse incoming request bodies that are URL-encoded. 
// This is commonly used for form submissions where the form data 
// is encoded as key-value pairs and sent in the HTTP request body.


const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Use express.urlencoded() middleware to parse application/x-www-form-urlencoded content type
app.use(express.urlencoded({ extended: true }));

// Example route to handle POST request with URL-encoded data
app.post('/formdata', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    res.send(`Received form data: ${JSON.stringify(formData)}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
