// The method-override middleware in Express.js is used to allow 
// HTTP verbs such as PUT or DELETE to be used in places where the 
// client doesn't support it. This is particularly useful in situations
//  where HTML forms only support GET and POST methods, but you need 
//  to use PUT or DELETE methods for CRUD operations.

const express = require('express');
const methodOverride = require('method-override');

const app = express();

// Use method-override middleware
app.use(methodOverride('_method'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Example route using PUT method
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  // Handle the update logic here
  res.send(`Updating item with id ${id}`);
});

// Example HTML form to trigger PUT request
app.get('/form', (req, res) => {
  res.send(`
    <form action="/update/123?_method=PUT" method="POST">
      <button type="submit">Update</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




