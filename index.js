const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Request protocol: ${req.protocol}`);
    next();
});

app.get('/', (req, res) => {
    res.send(`Request protocol is: ${req.protocol}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
