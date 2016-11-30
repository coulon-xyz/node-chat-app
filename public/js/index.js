var socket = io();

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('new message:', message);
});
