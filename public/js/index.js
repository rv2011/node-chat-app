var socket = io();
socket.on('connect', function() {
  console.log('Connected to Server.');
  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'hey, this is mike'
  // });
  socket.on('newMessage',function(message) {
    console.log(message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
  });
  // socket.emit('createMessage',{from:'Raghav',text:'Hey  Guys!'});
});
socket.on('disconnect', function() {
  console.log('Disconnected from the Server.');
});
// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
// });
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {
  });
});
