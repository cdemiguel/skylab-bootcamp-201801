// ### 1.3
// Utiliza el params ':' para que, cuando consultes los endpoints /hello:name y /goobye:name devuelva los mismos mensajes añadiendole tu nombre
//     - ex: /hello:pepe => 'hello pepe!'
const express = require('express')
const app = express()

app.get('/hello/:id', (req, res)=> {
    var name = "carlos"
    res.send(req.params.id + " " + name)

})

app.get('/goodbye/:id', (req,res)=>{
    var name = "jaime"
    res.send(req.params.id + " " + name)
})


const port = 8000
const server = app.listen(port, ()=> console.log('Se abre el servidor'))