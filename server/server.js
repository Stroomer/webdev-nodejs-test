const path    = require('path');
const http    = require('http');
const express = require('express');
const app     = express();
const port    = 3000;
const server  = http.createServer(app);


app.use(express.static('client'));
app.use('/client', express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log('listening on *:3000');
  console.log('groetjes van de serverside');
});