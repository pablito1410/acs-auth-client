let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var bodyParser = require('body-parser');

io.on('connection', (socket) => {

    // Log whenever a user connects
    console.log('user connected');

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on('message', (message) => {
        console.log("Message Received: " + message);
        io.emit('message', {type:'new-message', text: message});
    });
});


http.listen(5000, () => {
    console.log('started on port 5000');
});
app.use(bodyParser.json());
app.post('/', function(request, response){
  console.log('body=' + JSON.stringify(request.body));
  io.emit('message', {type:'new-message', text: request.body});
  response.send(request.body);
});
