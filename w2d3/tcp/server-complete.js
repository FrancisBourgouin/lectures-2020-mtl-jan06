//Let's use the net module that is natively in node.
const net = require('net')

//Store the object created by net.createServer in the constant server.
const server = net.createServer()
//Store the clients in an object
const clients = {}
//Declaring an iterator for our clients (should use a randomizer)
let clientId = 0

//Add event listener for connection events
server.on('connection', connection => { 
  //Logging the fact that we have a client & add it to the object
  console.log('A client connected')
  clients[clientId] = connection
  clientId++

  //Say hi to our client on their terminal
  connection.setEncoding('utf-8');
  connection.write('Hello to you stranger. 😎 \n')

  //Read the data that the client is sending us, in this case, keystrokes.
  connection.on('data', data => {
    console.log(data)
    for (let clientId in clients) {
      //Send message to all active clients except yourself 
      if (clients[clientId] !== connection) {
        clients[clientId].write(data);
      }
    }

  })
})

//Add event listener for close events
server.on('close', () => {
  console.log(`Server disconnected`)
});

//Add listener for error events
server.on('error', error => {
  console.log(`Error : ${error}`)
});

//Listen for connections on port 4000
server.listen(4000)