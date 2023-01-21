const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// In Windows set the env before the script starts -> set UV_THREADPOOL_SIZE=1 & node event-loop.js
// process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O Callback-1 finished');

  console.log('----------------I/O Callback-1 START');

  setTimeout(() => console.log('Timer 2 finished'), 0);

  setTimeout(() => console.log('Timer 3 finished'), 1000);

  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('process.nextTick 4 finished'));

  setImmediate(() => console.log('Immediate 3 finished'));

  // ASYNCHRONOUS - Non blocking code

  //   crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //     console.log(Date.now() - start, 'Password Encrypted');
  //   });

  //   crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //     console.log(Date.now() - start, 'Password Encrypted');
  //   });

  //   crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //     console.log(Date.now() - start, 'Password Encrypted');
  //   });

  //   crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //     console.log(Date.now() - start, 'Password Encrypted');
  //   });

  //   crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //     console.log(Date.now() - start, 'Password Encrypted');
  //   });

  // SYNCHRONOUS - blocking code
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  console.log('----------------I/O Callback-1 END');
});

console.log('Hello from the top-level code');
