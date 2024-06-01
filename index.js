const express = require('express');
const app = express();
const port = 3000;

// Middleware to log route information
app.use((req, res, next) => {
    
    if (req.route) {
        console.log('Route: ',req.route);
    } else { 
        console.log('No route matched yet.'); 
    }
    next();
});

// Define a couple of routes
app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.post('/users', (req, res) => {
    res.send('User created');
});

// Catch-all route for unmatched routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express')
const app = express()
const router = express.Router()

router.get('/hy',(req,resp)=>{
    console.log(req.route)
    resp.send("hello route - "+req.route.path)
})

app.use('/hello',router)

app.get("/home",(req,resp)=>{
    console.log("Home is  ",req.route)
    resp.send("hello route how frist  "+req.route.path)
})

app.listen(3000,()=>{
    console.log("api hit successfully") 
})



