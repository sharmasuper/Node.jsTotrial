const express = require('express');
const app = express();
const port = 3000;

// Middleware to set the response charset based on client's preferences
app.use((req, res, next) => {
    const acceptedCharset = req.acceptsCharsets('iso-8859-1', 'windows-1252');

    if (acceptedCharset) {
        res.charset = acceptedCharset;
    } else {
        res.status(406).send('Not Acceptable');
        return;
    }
    next();
});

// Define a route
app.get('/data', (req, res) => {
    res.send(`This response is encoded in ${res.charset}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
