const express = require('express');
const path = require('path');
const getEntries = require('./entries');

const app = express();

const port = process.env.PORT || 8080;

const entries = getEntries(path.join(__dirname, '..', 'entries.txt'));

app.get('/', (req, res) => {
    res.send(entries);
});

app.get('/:index', (req, res) => {
    res.send(entries[req.params.index]);
});

const server = app.listen(port, () => console.log(`Started JIFVAAS backend on port ${ port }`));

process.on('SIGINT', () => {
    console.log('Gracefully shutting down your express server');
  
    server.close();
});
  