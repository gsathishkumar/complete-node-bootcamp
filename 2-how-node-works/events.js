const EventEmitter = require('events');

const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
  console.log('Customer Name is : Sathish');
});

myEmitter.on('newSale', stock => {
  console.log(`There are now ${stock} items left`);
});

myEmitter.emit('newSale', 9);

//////////////////////////////////

const server = http.createServer();
server.on('request', (req, res) => {
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});
server.on('request', (req, res) => {
  console.log(req.url);
  console.log('Another Request received');
});

server.on('close', () => {
  console.log('Server Closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for Request');
});
