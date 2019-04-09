//replaces telnet client, we want to use a node.js built client

const net = require('net');
const readline = require('readline');

const client = net.createConnection(7890, 'localhost', () => {
  console.log('I am connected to the server');
  //server/clients are streams so we can read and write to them
  client.write('hello I am a client'); //sends this message up to client. //so this is the emit, which is caught in our server.js with client.on('data)

});
