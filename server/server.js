const path = require('path'); // Built in module, doesn't need npm
const http = require('http'); // idem
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require ('./utils/message')

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

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user joined the room'));

  socket.on('createMessage', (message, callback) => {
    console.log("new message:", message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is an ack from the server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   test: message.text,
    //   createdAt: new Date().getTime()
    // });


  });

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });



});


server.listen(port , () => {
  console.log(`Server started on port ${port}`)
});
