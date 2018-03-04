// para leer el .env archivo
require('dotenv').config()
const express = require('express')
const fs = require('fs');
// const url = require('url')
const moment = require('moment')
const bodyParser = require('body-parser')
const byLine = require('byline')
// array objetos

const dataPath = process.env.DATA_PATH
const staff = require(dataPath)


const app = express()

app.get('/api/staff', (req, res) => {

    // IMPORTAR ARCHIVOS CON FS READFILE - se ha de importar tb el módulo en la cabecera
    // var file = fs.readFileSync("staff.json", "utf8")
    const query = req.query.q || req.query.query

    if (query) {
        const results = staff.filter(person => {
            return person.name.includes(query) || person.surname.includes(query) || person.email.includes(query)
        })
        res.json(results)
    } else
        res.json(staff)


}

)


//shuffle

// app.get('/api/shuffle', (req, res)=>{

// })


const port = process.env.PORT
app.listen(port, () => console.log(`landing server running on port ${port}`))



// // TEST http://localhost:8000/api/staff?q
// // TEST http://localhost:8000/api/staff?query

// app.get('/api/staff', (req, res) => {

//     const date = moment.utc(req.query.iso)

//     const data = {
//         hour: date.hours(),
//         minute: date.minutes(),
//         second: date.seconds()
//     }

//     // res.writeHead(200, { 'Content-Type': 'application/json' })
//     // res.end(JSON.stringify(data))

//     res.json(data)
// })

// const textBodyParser = bodyParser.text()

// app.post('/helloworld', textBodyParser, (req, res) => {
//     res.send(req.body)
// })

// const jsonBodyParser = bodyParser.json()

// app.post('/helloworld/json', jsonBodyParser, (req, res) => {
//     res.json(req.body)
// })

// const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.post('/login', urlencodedParser, (req, res) => {
//     res.send(`${req.body.username}:${req.body.password}`)
// })

// const port = process.argv[2]

// app.listen(port, () => console.log(`landing server running on port ${port}`))
