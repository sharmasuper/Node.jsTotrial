const express = require('express');
const app = express();

// Mount the app on a specific path
const mountPath = '/api';
const subApp = express();

subApp.get('/', (req, res) => {
    res.send('Hello from the sub app!');
});

// Use the subApp on the '/api' path
app.use(mountPath, subApp);

app.get('/', (req, res) => {
    res.send('Hello from the main app!');
});

// Endpoint to get the path of the mounted subApp
app.get('/mounted-path', (req, res) => {
    res.send(`SubApp is mounted on: ${subApp.path()} himself- ${app.path()}`); //app.path() nahi h to nahi ayga par
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

