// MODULES

// accessing the module 2-name.js
const name = require('./2-name');
const sayHi = require('./3-utils');
const alternatee = require('./4-alternate-export.js');
console.log(alternatee)

// sayHi(name1);
sayHi.sayHi(name.name2);
sayHi.sayHi(name.name3);

