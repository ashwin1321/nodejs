// creating the package

// npm init -- step by step process
// npm init -y   -- shortcut

//installing package locally ---npm i <packagename> 
//installing package globally ---npm install -g <packagename> 
//installing package as dev developer ---npm i <packagename> -D

// installing other dependencies npm creates a folder node_modules which has all the dependencies inside 
// uninstall the dependencies by running --  npm uninstall <package name>

const _ = require('lodash');

const item = [1,[2,[3,[4]]]];
const newitem = _.flattenDeep(item);
console.log(newitem);
