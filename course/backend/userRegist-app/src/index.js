require('dotenv').config()

const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const bodyParser = require('body-parser')

const app = express()


app.set('view engine', 'pug')
// por si hay archivos estáticos pug va a buscar la carpeta que se le dice,
// por defecto va a buscar views para encontrar el index.pug
app.use(express.static('../styles/style.css'))



const formBodyParser = bodyParser.urlencoded({ extended: false })


MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    const db = conn.db('users')

    let userToUpdate = []
    let results = []
    let message = ''

    let viewUpdateForm = false

    app.get('/', (req, res) => {


        db.collection('users').find().toArray((err, data) => {

            if (err) throw err;

            console.log(results)

            res.render('index', { data, userToUpdate, viewUpdateForm, message, results })

        })

    })


    app.post('/register', formBodyParser, (req, res) => {

        message = ''

        const { body: { name, surname, email, username, password } } = req


        db.collection('users').find({"$or": [{"email": email}, {"username": username}]}).toArray((err, selectedUser) => {
            if (err) throw err;

            if(email=='' || username == ''){
                message = 'los campos email y username son requeridos'
            }
            else if(selectedUser.length){
                message = "Ey tio que ya hay un email o usuario en la BBDD con estas credenciales"
            }else {
                db.collection('users').insert({ firstname: name, surname: surname, email: email, username: username, password: password })
            }

        })

        res.redirect('/')


    })

    app.get('/:id/delete', (req, res) => {

        message = ''

        const id = req.params.id

        db.collection('users').deleteOne({ "_id": ObjectId(id) }).then(res.redirect('/'))

    })

    app.get('/delete', (req, res) => {

        message = ''

        db.collection('users').deleteMany({}).then(res.redirect('/'))

    })

    app.get('/:id/update', (req, res) => {

        message = ''

        const id = req.params.id

        userToUpdate = []

        viewUpdateForm = true

        let selectedUser = db.collection('users').find({ "_id": ObjectId(id) })

        db.collection('users').find({ "_id": ObjectId(id) }).toArray((err, dataToUpdate) => {

            userToUpdate.push(dataToUpdate)

        })

        res.redirect('/')
    })

    app.post('/updateselected/:id', formBodyParser, (req, res) => {

        message = ''

        const id = req.params.id
        const { body: { name, surname, email, username, password } } = req

        db.collection('users').update({ "_id": ObjectId(id) },
            { $set: { firstname: name, surname: surname, password: password } })

        viewUpdateForm = false

        res.redirect('/')

    })


    // filtrado
    app.get('/search/', (req, res) => {

        const query = req.query.search

        console.log(query)

        results = []

        db.collection('users').find({"$or": [{"email": query}, {"username": query}, {"firstname": query}, {"surname": query}]}).toArray((err, dataToUpdate) => {

            results = dataToUpdate
            res.redirect('/')
        })


        

    })


    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })

    // SERVER CLIENT
    const port = process.env.PORT

    app.listen(port, () => console.log(`User App running on port ${port}`))
})




