// El módulo fs nos ayudara a copiar el arvhivo
var fs = require('fs')

// fs.createReadStream('copia_file.js').pipe(fs.createWriteStream('newLog.js'));

// // Transform

// fs.createTransformStream('copia_file.js');


// var stream = require('stream');
// var util = require('util');

// node v0.10+ use native Transform, else polyfill
const { Transform } = require('stream');

const file = 'copia_file.js'

const upperCaseTr = new Transform({
  transform(file) {



    
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);