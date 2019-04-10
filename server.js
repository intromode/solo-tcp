
const net = require('net');

const server = net.createServer(client => {
  console.log('I am connected!');
  client.on('data', data => {
    client.write(data);
  });
});

server.listen(7890)
