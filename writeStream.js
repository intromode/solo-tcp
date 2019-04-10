const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
flags: 'a' 
}); 

ws.write('{')
ws.write('"name":"spot",')
ws.write('"age": "15"')
ws.write('},')

ws.end();

