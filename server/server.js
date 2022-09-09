const path    = require('path');
const http    = require('http');
const express = require('express');
const app     = express();
const port    = 3000;
const server  = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


app.use(express.static('client'));
app.use('/client', express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });

});

server.listen(port, () => {
  console.log('listening on *:3000');
  console.log('groetjes van de serverside');
});