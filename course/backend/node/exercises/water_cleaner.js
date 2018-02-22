const { Transform } = require('stream');
var fs = require("fs");

// const upperCaseTr = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString());

//     // el callback se queda esperando a futuros chunks
//     callback();
//   }
// });


var fs = require("fs");

var fileInString;

fs.readFile("water.txt", function (err, data) {
    if (err) throw err;
    //console.log(data.toString());
    var fileInString = data.toString()
});

const filterFile = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      // el callback se queda esperando a futuros chunks
      callback();
    }
   
  });

 process.stdin.pipe(filterFile).pipe(process.stdout);

