var io = require('socket.io').listen(8000)
// metodo que nos ayuda a recibir las conexiones desde el cliente
// este método disparara la funcion everyStart cada vez que un usuario se conecte a nuestra web
io.sockets.on("connection", arranque)

// dicha funcion tendra por parametro un socket es decir una conexion en tiempo real entre cliente y servidor
function arranque(socket){
    // por medio de socket que es un objeto pasado por parametro
    // en el momento de cliente le pusimos el parametro data-cliente al enviar datos
    // que es el que utilizaremos para identificar

    //cuando se reciban los data-cliente llamamos a una nueva funcion retrieve-datas
    socket.on("datos_cliente", regresar_datos)
}

// esta funcion recibe los datos del cliente
// y queremos regresarlo al lado cliente
function regresar_datos(data){
    io.sockets.emit("datos_servidor", data)
}