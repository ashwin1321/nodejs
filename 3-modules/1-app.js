// MODULES

// accessing the module 2-name.js
const name = require('./2-name');
const sayHi = require('./3-utils');
// console.log(name);

// sayHi(name1);
sayHi.sayHi(name.name2);
sayHi.sayHi(name.name3);