
const net = require('net');

const allClients = [];
const server = net.createServer(client => {
  console.log('I am connected!');
  allClients.push(client);
  
  client.on('data', data => {
    allClients.forEach(client => {
      client.write(`ECHO FROM SERVER: ${data}`);
    });  });
});

server.listen(7890);

