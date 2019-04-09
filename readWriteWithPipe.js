const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8'
});

const ws = fs.createWriteStream('./1_streams-copy.md');

rs.pipe(ws);
//dont need end, does it for us 
