// connect-image-optimus is a middleware for Express.js that optimizes images on the fly. It can be used to 
// reduce the size of images and improve 
// the performance of your web application by compressing images before they are sent to the client.

const express = require('express');
const optimus = require('connect-image-optimus');
const path = require('path')
const app = express();

// Apply the connect-image-optimus middleware
app.use(optimus());

// Serve static files
app.use(express.static('public/images/'));


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// public/images/image-3d-ganesha-dark-background-diwali.jpg