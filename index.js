const express = require('express');
const app = express();
// In Express.js, the req.xhr property is a boolean value that is true if 
// the request was made using an XMLHttpRequest (Ajax). This is useful for distinguishing between 
// standard browser requests and requests made through JavaScript on the client side.
// Route to demonstrate req.xhr
app.get('/data', (req, res) => {
    console.log("hello",req.xhr) 
    if (req.xhr) {
        // Request was made with XMLHttpRequest (Ajax)
        res.json({ message: 'This is a response to an Ajax request' });
    } else {
        // Standard browser request
        res.send('This is a response to a standard browser request');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
