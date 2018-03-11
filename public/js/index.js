var socket = io();
socket.on('connect', function() {
  console.log('Connected to Server.');
  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'hey, this is mike'
  // });
  socket.on('newMessage',function(message) {console.log(message)});
  socket.emit('createMessage',{from:'Raghav',text:'Hey  Guys!'});

});
socket.on('disconnect', function() {
  console.log('Disconnected from the Server.');
});
// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
// });
