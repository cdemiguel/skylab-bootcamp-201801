// Crea un objeto global llamada Messages con las siguientes propiedades
//     - hello: 'hello!',
//     - goodbye: 'goodbye!'
// Como en el ejercicio anterior, devuelve el mensaje encapsulado en el objeto en cada endpoint.
const express = require('express')
const app = express()

let messages = {
    hello: 'hello!',
    goodbye: 'goodbye!'
}

app.get('/hello', (req, res)=>{
    // el send ya manipula en json el data ( el mensaje en este caso)
    res.send(messages)
}) 


app.get('/goodbye', (req, res)=>{
    res.send(messages)
    res.end(server.close())
})

const port = 8000
const server = app.listen(port, ()=> console.log('Se abre el servidor'))