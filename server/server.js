const path = require('path'); // Built in module, doesn't need npm
const http = require('http'); // idem
const express = require('express');
const socketIO = require('socket.io');

// Variables declaration
const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
var app = express();
var server = http.createServer(app); // using http server and not an express
var io = socketIO(server);

app.use(express.static(publicPath));

// on register an event listener
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });

});



server.listen(port , () => {
  console.log(`Server started on port ${port}`)
});
