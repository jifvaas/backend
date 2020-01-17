const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    const entriesString = fs.readFileSync(path.join(__dirname, '..', 'entries.txt'), 'utf-8');

    const array = entriesString.split(os.EOL).map((item, index) => ({ index, value: item }));

    res.send(array);
});

app.get('/:index', (req, res) => {
    const entriesString = fs.readFileSync(path.join(__dirname, '..', 'entries.txt'), 'utf-8');

    const array = entriesString.split(os.EOL).map((item, index) => ({ index, value: item }));

    res.send(array[req.params.index]);
});

app.listen(3000, () => console.log("Started JIFVAAS backend on port 3000"));
