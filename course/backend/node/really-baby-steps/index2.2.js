const express = require('express')
const app = express()



app.get('/sum/:num1/:num2', (req, res)=> {

    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)

    res.send('suma es igual a' + suma(param1, param2))

})

app.get('/rest/:num1/:num2', (req, res)=> {

    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)

    res.send('resta es igual a' +resta(param1, param2))

})

app.get('/mult/:num1/:num2', (req, res)=> {

    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)

    res.send('mult es igual a' + mult(param1, param2))

})

app.get('/all/:num1/:num2', (req, res)=> {
    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)

    res.send('total es igual a ' + total(param1, param2))

})

function total(param1, param2){
    let sum = param1+param2
    let rest =param1-param2
    let mult = param1*param2
    let result =[sum, rest, mult]
    return result
}

function suma(param1, param2){
    return param1 + param2
}
function resta(param1, param2){
    return param1 - param2
}
function mult(param1, param2){
    return param1 * param2
}


const port = 8000
const server = app.listen(port, ()=> console.log('Se abre el servidor'))