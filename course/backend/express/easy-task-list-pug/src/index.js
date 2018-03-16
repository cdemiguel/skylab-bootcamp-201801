require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({extended: false})
const _ = require('lodash')
const app = express()
app.set('view engine', 'pug')

app.use(express.static('views'))

const tasksToDo = []
const tasksDone = []



/////////GET////////////////
app.get('/', (req, res)=> {
    res.render(
        'index', {tasksToDo, tasksDone}
    )
})


///////// POST CREATE TASK ////////////////
app.post('/createtask',formBodyParser, (req, res) =>{
    const text = req.body.tasks

    let randonNumber = _.random(0, 5000)

    tasksToDo.push({id: randonNumber,
                text: text,
                done: false})

    res.redirect('/')
})


///////// GET TASK DONE ////////////////
app.get('/:id', (req, res) =>{
    const taskID = req.params.id
    const selectedIndex = _.findIndex(tasksToDo, function(o) {return o.id = taskID})
    const selectedTask = _.find(tasksToDo, function(o){ 
        return o.id = taskID})
        
        // selectedTask.done = true
        tasksToDo.splice(selectedIndex,1)
        tasksDone.push(selectedTask)

        res.redirect('/')
        
})

app.get('/:id/delete', (req, res) =>{
    const taskID = req.params.id
    const selectedIndex = _.findIndex(tasksToDo, function(o) {return o.id = taskID})
    const selectedTask = _.find(tasksToDo, function(o){ 
        return o.id = taskID})
        
        // selectedTask.done = true
        tasksDone.splice(selectedIndex,1)

        res.redirect('/')
        
})



const port = process.env.port

app.listen(5000, () => console.log('Example app running on port 5000!'))



