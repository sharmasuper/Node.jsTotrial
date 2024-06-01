const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Requested path: ${req.path}`);
    next();
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID path: ${req.path}`);
});

app.get('/search', (req, res) => {
    res.send(`Search path: ${req.path}`);
});

app.post('/login', (req, res) => {
    res.send(`Login path: ${req.path}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
