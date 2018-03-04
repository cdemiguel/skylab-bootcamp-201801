// Crea una app en express.js con dos endpoints:
//     - /hello
//     - /goodbye
// En el endpoint, devolverás un log en consola 'hello!', en el segundo endpoint cerrarás la conexión y dirás 'goodbye!'.
const express = require('express')
const app = express()

app.get('/hello', (req, res)=>{
    res.send(console.log("hello!"))
}) 

app.get('/goodbye', (req, res)=>{
    res.end(()=>{
        console.log("GOODBYE")
        server.close()
    })
    
})

const port = 8000
const server = app.listen(port, ()=> console.log('Se abre el servidor'))