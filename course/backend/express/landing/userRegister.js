const express = require('express')
   const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT
const app = express()

let users = []

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)

app.post('/api/users/register', (req, res) => {

   const alreadyUser = users.filter(user => { return req.body.username === user.name})

   if(alreadyUser){
       console.log('User already exists')
   }
   else{
   users.push( {
       'username' : req.body.username,
       'password' : req.body.password
   }
   )
   }

   // res.send(`${req.body.username}:${req.body.password}`)

   res.send(users)


})



app.listen(port, () => console.log(`users api running on port ${port}`))