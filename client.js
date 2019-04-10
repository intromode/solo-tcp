
const net = require('net');
const readline = require('readline');

const client = net.createConnection(7890, 'localhost', () => {
  console.log('I am connected to the server');
  client.write('hello I am a client'); 
});
