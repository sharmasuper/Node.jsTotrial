const mongoose = require('mongoose');

// Schema definition
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Model creation
const User = mongoose.model('User', userSchema);

// Connection URI
const uri = 'mongodb://localhost:27017/test';

// Connecting to MongoDB with bufferTimeoutMS option
mongoose.connect(uri, {
  bufferTimeoutMS: 5000, // Set buffer timeout to 5 seconds //buffer time no support
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Performing a database operation
    const newUser = new User({ name: 'John Doe', email: 'john@example.com' });

    // Saving the user to the database
    newUser.save((err) => {
      if (err) return console.error(err);
      console.log('User saved successfully');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
