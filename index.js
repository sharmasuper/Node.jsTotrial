// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Example route for serving a video file
// app.get('/video', (req, res) => {
//   const videoPath = path.join(__dirname, 'video.mp4');
//   const videoSize = fs.statSync(videoPath).size;

//   const range = req.range(videoSize);

//   if (range) {
//     if (range.type === 'bytes') {
//       const start = range[0].start;
//       const end = range[0].end < videoSize ? range[0].end : videoSize - 1;
//       const chunkSize = end - start + 1;

//       const file = fs.createReadStream(videoPath, { start, end });
//       const head = {
//         'Content-Range': `bytes ${start}-${end}/${videoSize}`,
//         'Accept-Ranges': 'bytes',
//         'Content-Length': chunkSize,
//         'Content-Type': 'video/mp4',
//       };

//       res.writeHead(206, head);
//       file.pipe(res);
//     } else {
//       res.status(416).send('Requested range not satisfiable');
//     }
//   } else {
//     const head = {
//       'Content-Length': videoSize,
//       'Content-Type': 'video/mp4',
//     };
//     res.writeHead(200, head);
//     fs.createReadStream(videoPath).pipe(res);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });





const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/file', (req, res) => {
  const filePath = path.join(__dirname, 'History.txt');
  const fileSize = fs.statSync(filePath).size;

  const range = req.range(fileSize);

  if (range && range.type === 'bytes') {
    const start = range[0].start;
    const end = range[0].end < fileSize ? range[0].end : fileSize - 1;
    const chunkSize = end - start + 1;

    const fileStream = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'text/plain',
    };

    res.writeHead(206, head);
    fileStream.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'text/plain',
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

















