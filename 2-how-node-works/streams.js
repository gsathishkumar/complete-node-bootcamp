const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  ////////////////////////
  // Solution - 1 Not fit for production
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end(data);
  //   });
  /////////////////////////
  // Solution - 2 Using Streams With a Back Pressure
  // FileSystem Readable Stream reads the data faster and
  // Http writable stream writes data in network much slower.
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.on('data', chunk => {
  //     console.log('Writing Chunk');
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     console.log('DONE');
  //     res.end();
  //   });
  //   readable.on('error', err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('File not found!');
  //   });
  /////////////////////////
  // Solution - 3

  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening for incoming request...');
});
