const express = require('express');
const app = express();
const port = 3000;

// Sample route that sends a JSONP response
app.get('/api/data', (req, res) => {
  const responseBody = {
    message: 'Hello, World!',
    status: 'success',
    data: {
      id: 1,
      name: 'Sample Data',
      info: 'This is a sample JSONP response'
    }
  };
 
  
  // Send JSONP response
  res.jsonp(responseBody);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
