
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});

const connectionToServer = net.createConnection(7890, 'localhost', () => {
  console.log('I am connected to the server');

  rl.prompt();
  rl.on('line', line => {
    connectionToServer.write(line);
    rl.prompt();
  });
});
