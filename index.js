const express = require('express');
const app = express();
const router = express.Router()
// Middleware to log the original URL
app.use((req, res, next) => {
  console.log('Original URL: hell', req.originalUrl);
  next();
});
router.use((req, res, next) => {
  console.log('Original URL:', req.originalUrl);
  next();
});

router.get("/hello",(req,resp)=>{
  resp.send("Hello router"+req.originalUrl)
})


app.use("/exa",router)
// Route to handle requests
app.get('/example', (req, res) => {
  res.send(`You requested the URL: ${req.originalUrl}`);
});

// Another route to demonstrate query strings
app.get('/search', (req, res) => {
  res.send(`Search query: ${req.originalUrl}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
