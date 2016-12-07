const path = require('path'); // Built in module, doesn't need npm
const http = require('http'); // idem
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

// Variables declaration
const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
var app = express();
var server = http.createServer(app); // using http server and not an express
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));

// on register an event listener
io.on('connection', (socket) => {
  console.log('New user connected');


  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room name are required.')
    }
    socket.join(params.room);
    users.removeUser(socket.id);  // removing the user from potential other rooms.
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));

    callback();
  })


  socket.on('createMessage', (message, callback) => {
    console.log("new message:", message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback(); // acknowledging
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    var user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left room ${user.room}`));
    };

    console.log('user disconnected')
  });
});


server.listen(port , () => {
  console.log(`Server started on port ${port}`)
});
