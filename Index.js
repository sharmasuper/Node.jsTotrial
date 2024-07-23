const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

// Configure cookie-session middleware
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'], // Use an array of keys for encryption
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Example route to set a session value
app.get('/set-session', (req, res) => {
    req.session.userId = 12345; // Set session data
    res.send('Session data set');
});

// Example route to get session value
app.get('/get-session', (req, res) => {
    const userId = req.session.userId;
    res.send(`Session data: ${userId ? `User ID is ${userId}` : 'No user ID set'}`);
});

// Example route to destroy session
app.get('/destroy-session', (req, res) => {
    req.session = null;
    res.send('Session destroyed');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
