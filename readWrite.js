const fs = require('fs');

const rs = fs.createReadStream('./2_tcp.md', {
  encoding: 'utf8'
});

const ws = fs.createWriteStream('./2_tcp-copy.md');


rs.on('data', data => {
  ws.write(data);
});

rs.on('end', () => {
  ws.end();
});

