const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
flags: 'a' //a for append, so it doesnt overwrite
}); //options objects which takes flags 

//writing a dog to spot.json in multiple chunks:
ws.write('{')
ws.write('"name":"spot",')
ws.write('"age": "15"')
ws.write('},')

ws.end();

