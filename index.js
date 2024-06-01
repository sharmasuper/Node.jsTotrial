const express = require('express');
const app = express();
const port = 3000;

// Define a route that uses req.query
app.get('/search', (req, res) => {
    // Retrieve query parameters
    const query = req.query;
    const term = query.term || 'No term provided';
    const page = query.page || 1;

    // Send a response
    res.send(`Search Term: ${term}, Page: ${page}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
