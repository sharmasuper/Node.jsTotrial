const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/data', (req, res) => {
    // Check which content type the client accepts
    const acceptedType = req.accepts(['json','html','xml']);
    
    // Respond based on the accepted type
    if (acceptedType === 'json') {
        res.json({ message: 'This is a JSON response' });
    } 
     else if (acceptedType === 'html') {
        res.send('<html><body><h1>This is an HTML response</h1></body></html>');
    } else if (acceptedType === 'xml') {
        res.type('application/xml');
        res.send('<response><message>This is an XML response</message></response>');
    } else {
        // Default response if none of the specified types are accepted
        res.status(406).send('Not Acceptable');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
