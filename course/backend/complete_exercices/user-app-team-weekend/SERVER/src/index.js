require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const app = express()
const jsonBodyParser = bodyParser.json()
const users = []

app.use('/api', router)

router.get('/list', (req,res) => {
    res.json(ok('todo bien', users.map(({id,name}) => ({id,name}))))
})

router.post('/create', jsonBodyParser, (req,res) => {

    const { name, password } = req.body

    if(!name || !password) 
        return res.json(ko('Error al crear','No has introducido el nombre o la constraseña'))

    const id = new Date().getTime().toString()
    users.push({id:id, name, password})
    res.json(ok('El usuario ha sido añadido'))       

})

router.put('/update/:id', jsonBodyParser, (req,res) => {

    const { id } = req.params
    const { name, password, newPassword } = req.body

    console.log(name,password,newPassword)

    const user = users.find(user => user.id == id)

    if(!user)
        return res.json(ko('Error al actualizar', 'El usuario no existe'))

    if(user.password != password)
        return res.json(ko('Error al actualizar', 'El usuario o la password no coinciden'))

    user.name = name
    user.password = newPassword

    res.json(ok('El usuario ha sido modificado'))
})

router.delete('/delete/:id', jsonBodyParser, (req,res) => {

    const { id } = req.params
    const { name, password } = req.body

    console.log(name)

    const index = users.findIndex(user => user.id == id)

    if(index === -1)
        return res.json(ko('Error al eliminar el usuario','El usuario no existe'))

    if(users[index].name != name || users[index].password != password)
        return res.json(ko('Error al eliminar el usuario', 'El usuario o la password no coinciden'))

    users.splice(index,1)

    res.json(ok('El usuario ha sido eliminado'))
})

const port = process.env.PORT 

app.listen(port, () => console.log(`open successful port in ${port}`))

function ok(message,item){

    const res = {status:'ok', message}

    if(item) res.item = item

    return res
}

function ko(message,error){

    const res = {status:'ko', message}

    if(error) res.error = error

    return res
}