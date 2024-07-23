// The connect-rid middleware is used to add a unique request ID to each incoming request 
// in an Express.js application. This can be helpful for tracking requests across your application and in logs.

const express = require('express');
const connectRid = require('connect-rid');

const app = express();

// Use connect-rid middleware

app.use((req,res,next)=>{
     req.id = "mohit sharma it is my id"
     next()
})
app.use(connectRid());
// Example route
app.get('/', (req, res) => {
    // Access the request ID
    const requestId = req.id;
    res.send(`Hello, world! Your request ID is ${requestId}`);
});

// Another example route
app.get('/info', (req, res) => {
    const requestId = req.id;
    res.json({ message: 'This is an info route', requestId: requestId });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


