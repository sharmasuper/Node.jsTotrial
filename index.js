const express = require('express');
const path = require('path');
const app = express();

app.get('/download', (req, res) => {
  const imagePath = path.join(__dirname, 'History.txt'); //image bhi send kar sktai h image.jpg file write karkai
  const filename = 'image.txt';

  // Set the Content-Disposition header to attachment with the specified filename
  res.attachment(filename);

  // Send the image file
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error('Error occurred while sending file:', err);
      res.status(500).send('Error occurred while downloading the file.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
