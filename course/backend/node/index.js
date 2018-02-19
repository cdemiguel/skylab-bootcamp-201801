//1.
// console.log('HELLO WORLD');

//2.
// var result = 0;
// for (i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }
// console.log(result);


//3.
// var fs = require('fs')
// var doc = fs.readFileSync(process.argv[2])
// contents = doc.toString();
// console.log(contents.split('\n').length - 1);

//4. Ejemplo con callback
// var fs = require('fs')
// var path = process.argv[2].toString()
// var doc = fs.readFile(path, 'utf-8', callback)

// function callback (err, succ) {
//     err ? console.log("hay un error") :  console.log(succ.split('\n').length - 1);
// }

//5.
var fs = require('fs')
const path = require('path')

var _path = process.argv[2]
var ext = process.argv[3]

fs.readdir(_path, (err,files)=>{
    if (err) throw err
    files.forEach(file => {
        if (path.extname(file) === `.${ext}`) console.log(file)
    })
})

//6. 

//7. http client
// var http = require('http');

// var url = process.argv[2];

// http.get(url, function(request) {
//   request.setEncoding("utf8");
//   request.on("data", function(data) {
//     console.log(data);
//   });

//   request.on("error", ()=>{
//     console.error
// })

//   request.on("end", ()=>{
//       console.log("ending!!!")
//   })

// });

//8. collect http
const http = require('http');
const url = process.argv[2];
var result ="";
http.get(url, function(request) {
  request.setEncoding("utf8");
  request.on("data", function(data) {
    result += data;
  });

  request.on("end", ()=>{
    console.log(result.length);
    console.log(result);
  })

});