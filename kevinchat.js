var port = 1337
var host = '127.0.0.1'
var sockets = []

var net = require('net')

var server = net.createServer(function(socket) {
  //console.log('Server has a new connection')
  sockets.push(socket)
  socket.name
  socket.write('Hey stranger, what\'s your name?\n')
  socket.on('data', function(data) {
    var message = data.toString().trim()
    if(message.toLowerCase() === 'quit'){
      socket.write('okay then')
      return socket.end()
    }
    if(socket.name === undefined){
      socket.name = message
      socket.write('welcome! \n')
      console.log(socket.name + ' has joined the chat')
      broadcast(socket.name + ' has joined the chat\n')
      return;
    }

    if(message.indexOf('/w') >= 0){
      var message = message.split(' ')
      var notFound = true
      sockets.forEach(function(wsock, dex) {
        if(wsock.name === message[1]){
          message.splice(0,2)
          wsock.write('**' + socket.name + ': ' + message.join(' ') + '**' + '\n')
          notFound = false
        }
      })
      if(notFound) socket.write('user is not in the chat room')
    } else {
      message = socket.name + ': ' + message + '\n'
      broadcast(message, socket)
      console.log(message)
    }
  }).on('close', function(socket) {
    sockets.splice(sockets.indexOf(socket), 1)
  }).setKeepAlive(true)

  function broadcast(message, sender) {
    sockets.forEach(function(socket) {
      if(socket !== sender){
        socket.write(message)
      }
    })
  }


}).on('listening', function() {
  console.log('Server is listening on port ', port)
}).on('close', function() {
  console.log('Server is now closed')
}).on('error', function(err) {
  console.log(err.message)
})

server.listen(port)