// The express.static(root, [options]) method in Express.js is used to serve static files such as HTML files, 
// images, CSS files, and JavaScript files. This middleware is useful for serving files from a specific directory. 
// The root parameter specifies the root directory from which to serve static assets, and the optional options parameter can be 
// used to customize the behavior of the middleware.

// Here's an example demonstrating how to use express.static():




const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
};

// Serve static files with options
// app.use(express.static(path.join(__dirname, 'public'),options));
app.use(express.static(path.join(__dirname, 'public')))
// Example route to serve an HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'Index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

