// CORS (Cross-Origin Resource Sharing) middleware is essential for enabling cross-origin requests in Express.js
//  applications. It allows your server to specify which domains are permitted to access its resources. 

const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://example.com', // Allow only example.com
    methods: ['GET', 'POST'], // Allow only GET and POST methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

// const corsOptionsDelegate = function (req, callback) {
//     let corsOptions;
//     if (req.header('Origin') === 'http://example.com') {
//         corsOptions = { origin: true }; // Allow example.com
//     } else {
//         corsOptions = { origin: false }; // Deny other origins
//     }
//     callback(null, corsOptions);
// };

// hum yai bhi use kar sktai h 



// Use CORS middleware
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



