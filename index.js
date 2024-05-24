const express = require('express');
const app = express();
const path = require('path')

app.get('/download', (req, res) => {
  // Set the filename for the attachment
  const filename = path.join(__dirname,'History.txt');
console.log(filename)

  // Set the Content-Disposition header to attachment with the specified filename
  res.attachment(filename);

  // Send the content of the file

  res.send("send attched file to the client");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
