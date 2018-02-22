
const http = require('http')
// creamos servidor pero aun no lo arrancamos
const server = http.createServer((req,res) => {
    //primer objeto recibe peticiones el segundo responde

    // paso anterior
    // res.write('hello!!')

    res.end('ok')
})
// del segundo posi del array vendra el puerto
const port = process.argv[2]

// para escuchar la respuesta del servidor al console y ahí se levanta en la puerta 8000
server.listen(port,()=> console.log(`http json api SERVAH running ON ${port}`)) 

// el comando curl seguido del levantado del servidor (en otro terminal -consola) 
// curl conectate y envia una peticion vacia sin nada a localhosdt en la puertsa 8000
// y nos recibiremos la respuesta + el console.log del listen
// curl localhost:8000
// localhost mapea mi direccion ip de la maquina + el puerto