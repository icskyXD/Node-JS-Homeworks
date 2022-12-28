const fs = require('fs')
const file = JSON.parse(fs.readFileSync('text.txt'))
const getFirstWord = require('./getFirstWord')
const getLastWord = require('./getLastWord')

console.log(getFirstWord(file));
console.log(getLastWord(file));