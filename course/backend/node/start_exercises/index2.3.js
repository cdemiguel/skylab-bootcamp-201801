// ### 2.3
// Utiliza body-parser para poder recibir n1 y n2 mediante el req.body
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Cuando los datos viajan en el body y no en la url
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/login', urlencodedParser, (req, res) => {

    var num1 = parseInt(req.body.num1)
    var num2 = parseInt(req.body.num2)

    var result = num1 + num1

    res.send("esto es " + result)
})

const port = 8000
const server = app.listen(port, ()=> console.log('Se abre el servidor'))


app.post('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body
    users.push({ username, password })
    res.json(ok('data actualizated'))
})
