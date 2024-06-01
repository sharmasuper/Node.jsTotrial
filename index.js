// In Express.js, req.signedCookies is used to access signed cookies. Signed cookies provide an additional
//  layer of security by ensuring the integrity of the cookie value. To use signed cookies,
//   you'll need to set up a secret for signing cookies.

// Here’s an example demonstrating how to use req.signedCookies in an Express.js application:




const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

/// Replace this with your generated secret key
const secretKey = '4c6f72656d497073756d446f6c6f7241696d65742e204c6f72656d497073756d446f6c6f724469676e697373696d20656c69742e2050726f696e206e696268';

app.use(cookieParser(secretKey));

// Route to set a signed cookie
app.get('/set-signed-cookie', (req, res) => {
    res.cookie('signedCookie', 'thisIsASignedCookieValue', {
        signed: true, // Sign the cookie
        httpOnly: true, // Ensure the cookie is not accessible via JavaScript
        maxAge: 1000 * 60 * 60, // 1 hour
    });  
    res.send('Signed cookie has been set'); 
});

// Route to check if the signed cookie is set
app.get('/check-signed-cookie', (req, res) => {
    const signedCookie = req.signedCookies.signedCookie;
    if (signedCookie) {
        res.send(`Signed cookie value: ${signedCookie}`);
    } else {
        res.send('No signed cookie found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
