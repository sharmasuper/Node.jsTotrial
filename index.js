const express = require('express');
const app = express();

// Set a custom variable
app.set('title', 'My Site');

// Middleware to log the custom variable
app.use((req, res, next) => {
    console.log('App title:', app.get('title'));
    next();
});

// Define a route to show the app title
app.get('/', (req, res) => {
    res.send(`App title is: ${app.get('title')}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`App title is: ${app.get('title')}`);
});
