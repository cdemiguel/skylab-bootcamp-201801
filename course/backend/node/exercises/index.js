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
// var fs = require('fs')
// const path = require('path')

// var _path = process.argv[2]
// var ext = process.argv[3]

// fs.readdir(_path, (err,files)=>{
//     if (err) throw err
//     files.forEach(file => {
//         if (path.extname(file) === `.${ext}`) console.log(file)
//     })
// })

//6. 
// var lslib = require('./lslib');

// var dirname = process.argv[2];
// var ext = process.argv[3];

// lslib(dirname, ext, function(err, files) {
//   for (i = 0; i < files.length; i++) {
//     console.log(files[i]);
//   }
// }



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
// para ir recibiendo datos desde una url
// const http = require('http');
// const url = process.argv[2];
// var result ="";
// http.get(url, function(request) {

//   request.setEncoding("utf8");

//   request.on("data", function(data) {
//     result += data;
//   });

//   request.on("end", ()=>{
//     console.log(result.length);
//     console.log(result);
//   })

// });

//8.2 almacenando chunks en un buffer, herramientas de node ya para esto
// buffer list y concat stream...

// const http = require('http');
// const bl = require('bl')
// // SE PUEDE HACER CON CONCTATSTREAM
// // const concatStream = require('concatStream')
// const url = process.argv[2];

// //el bl empipa la respuesta con ello
// var result ="";
// http.get(url, function(request) {

//   request.setEncoding("utf8");

//   request.pipe(bl((err, data) =>{

//     if(err) throw err

//     console.log(data.toString())
//   }))

// });

// 9. Malabares con asincronismo con callbackhell!!!
// const http = require('http')
// const concatStream = require('concat-stream')

// const url = process.argv[2]
// const url2 = process.argv[3]
// const url3 = process.argv[4]

// http.get(url, res => {
//     res.setEncoding('utf-8')
//     res.pipe(concatStream(data => {
//         console.log('res.pipe -> res on data')
//         console.log(data)

//         http.get(url2, res => {
//             res.setEncoding('utf-8')
//             res.pipe(concatStream(data => {
//                 console.log('res.pipe -> res on data')
//                 console.log(data)

//                 http.get(url3, res => {
//                     res.setEncoding('utf-8')
//                     res.pipe(concatStream(data => {
//                         console.log('res.pipe -> res on data')
//                         console.log(data)



//                     }))
//                 })


//             }))
//         })



//     }))
// })

// //9.2 con recursivdad
// const http = require('http')
// const concatStream = require('concat-stream')

// var numerofUrl = process.argv.length-2
// var n = 0;

// function passCode() {
//     const url = process.argv[n+2]
//     http.get(url, res => {
//         res.setEncoding('utf-8')
//         res.pipe(concatStream(data => {
//             console.log('res.pipe -> res on data')
//             console.log(data)
    
//             if(n < numerofUrl-1){
//                 n++
//                 passCode();
//             }
//         }))
//     })
// }

// passCode();

//10. Servidor de tiempo - time server

// var net = require('net');

// function pad(n) { return n < 10 ? '0' + n : n }

// var server = net.createServer(function(socket) {
//   d = new Date();
//   s = d.getFullYear() + "-"
//     + pad(d.getMonth() + 1) + "-"
//     + pad(d.getDate()) + " "
//     + pad(d.getHours()) + ":"
//     + pad(d.getMinutes()) + "\n";

//   socket.end(s);

// });
// server.listen(process.argv[2]);

//11. Servidor de archivos http
// var fs = require('fs');
// var http = require('http');

// var port = process.argv[2];
// var file = process.argv[3];

// http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type' : 'text/plain' });

//   fs.createReadStream(file).pipe(res);
// }).listen(port);
// es lo mismo que igualar la funciona  una variable que se llame res y poner res.listen(port)

//12.
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer((req, res)=>{
//     res.end('yes!')
// })
// const port = process.argv[2]
// server.listen(port)

// enviar fichero a servidor curl -X POST --upload-file <file-path> http://localhost:8000






//13. API JSON EN SERVIDOR HTTP
// vamos a tener que hacer un servidor necesitaremos el require http ( el servidor es http )

// primero node para levantar servidor en consola => node <archivo> <puerto>

const http = require('http')
// creamos servidor pero aun no lo arrancamos

// nos traemos el const url es necesario para parsear la url
const url = require('url')

const server = http.createServer((req,res) => {

    // esto me devuelve un objeto url con unas caracteristicas y de ahi extraigo la url
    /*const _url = url.parse(req.url)*/
    // DE LA CONSTANTE URL tenemos el pathname que ya nos da la ruta y el query en forma en string
    // pero para que te lo devuelva en objeto al parse le ponemos un true lo que hara sera convertir el query strin en objeto como aqui
    const _url = url.parse(req.url, true)
    // _url sera un objeto que contenga todo... ha hechon un objeto
    // _url.query
    // _url.pathname

    // nos quedara parsear esa fecha yy pasarla al objeto new Date para tner sus metodos
    // iso.query


    // const date = new Date(_url.query.iso)
    // aqui tensdremos todos los metodos de la fecha, getDate, getMonth ... recordar al month se lñe suma 1

    // por lo tanto pasaremos la fecha en formato json

    // nops petaba por usar const iguales por el hoisting a nivel de date data
    let date
    let data

    if(_url.pathname === '/api/parsetime'){
         date = new Date(_url.query.iso)

         console.log(date)

         data = {
            hour: date.getHours(),
            minute:date.getMinutes(),
            second:date.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        // debemos enviar el objeto json en formato strin por eso usamos stringify
        res.end(JSON.stringify(data))
    }
    // podemos enviar la fecha tb en formato unixtime en la ruta unixtime
    else if(_url.pathname === '/api/unixtime'){
         date = new Date(_url.query.iso)
         data = {
            unixtime:date.getTime()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        // debemos enviar el objeto json en formato strin por eso usamos stringify
        res.end(JSON.stringify(data))
    } 
    else {
        // o devolver un codigo de stwatus server
        res.writeHead(405)
        res.end('hello api')
    }

    
    //

    //primer objeto recibe peticiones el segundo responde
    // req donde te viene la informacion
    // res es donde tu puedes esvcribir algo
    // cada peticion crea un req un res independiente a ellas
    // en el objeto req recibimos informacion por ejemplo la url... el path
    res.end('ok')
})
// del segundo posicion del array vendra el puerto
const port = process.argv[2]

// para escuchar la respuesta del servidor al console y ahí se levanta en la puerta 8000
server.listen(port,()=> console.log(`http json api SERVAH running ON ${port}`)) 

// el comando curl seguido del levantado del servidor (en otro terminal -consola) 
// curl conectate y envia una peticion vacia sin nada a localhosdt en la puertsa 8000
// y nos recibiremos la respuesta + el console.log del listen
// curl localhost:8000
// localhost mapea mi direccion ip de la maquina + el puerto


//3. /api/parsetime?iso=2013-08-10T12:10:15.474Z de aqui el ejercicio nos pide
// separar que es path a que es query string y parsearla


// esto lo prueba con la url de la practica localhost:8000/api/.....