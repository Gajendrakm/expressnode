const names = require('./4-names.js')

const sayHi = require('./5-utils.js')

const data = require('./6-alternative-flavor')
console.log(data)

console.log("-----");

console.log(names);



sayHi("ranjith");
sayHi(names.john);
sayHi(names.alberto);