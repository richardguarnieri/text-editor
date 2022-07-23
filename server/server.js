const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

console.log(__dirname)
app.listen(port, () => console.log(`Web Server listening on port: ${port}`));
