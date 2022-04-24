// creating the package

// npm init -- step by step process
// npm init -y   -- shortcut

// installing other dependencies npm creates a folder node_modules which has all the dependencies inside 

const _ = require('lodash');

const item = [1,[2,[3,[4]]]];
const newitem = _.flattenDeep(item);
console.log(newitem);