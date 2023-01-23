// console.log(arguments);
// console.log(require('module'));

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
// console.log(calc2.multiply(2, 5));

const { add, divide } = require('./test-module-2');
console.log(divide(15, 5));

// Caching
const func1 = require('./test-module-3');
const func2 = require('./test-module-3');
func1();
func2();
