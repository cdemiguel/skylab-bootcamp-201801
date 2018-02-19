'use strict';

/*Padre*/
class TaskApp extends React.Component{
    constructor(){
        super()

        this.state = {
            tasks: [],
            taskDone:[]
        }
    }

    addTask = (task) => {
        this.setState(prevState => {
            return {
                // tasks: prevState.tasks.concat(this.state.input)
                tasks: [...prevState.tasks, task]
            }
        })
    }


    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }

    markDone = (taskDone, index) =>{
        this.setState(prevState => {
            console.log(taskDone)
            return {
                taskDone: [...prevState.taskDone, taskDone]
            }
        })
        // this.setState(prevState => {
        //     // return {
        //     //     // tasks: prevState.taskDone.filter((task, _index) => {
        //     //     //     return index !== _index
        //     //     })
        //     }
        // })
    }


    render() {
        console.log(this)
        return <div>
            <TaskInput onAddTask={this.addTask} />
            <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} onMarkDone={this.markDone}/>
            <TaskListComplete taskDone={this.state.taskDone} />
        </div>
    }
}


/*Hijo TaskInput*/
class TaskInput extends React.Component{
    constructor() {
        super()
        
        this.state = {
            input: ''
        }
    
    }

    keepInput = e => this.setState({ input: e.target.value })
    
    addTask = () => {
        this.props.onAddTask(this.state.input)

        this.setState({ input: '' })
    }


    render() {
        return <form onSubmit={e => {
            e.preventDefault()

            this.addTask()
        }
        }>
            <input type="text" className="round-blue-input" placeholder="Input task" onChange={this.keepInput} value={this.state.input} />
            &nbsp;
        <button type="submit" className="round-red-button">Add</button>
        </form>
    }
}


/*Hijo dumb TaskInput*/
function TaskList(props) {
    return <ul>
        {props.tasks.map((task, index) => <li>{task}</li>)}
    </ul>
}


function TaskListComplete(props) {
    return <ul>
        {props.taskDone.map((task) => <li>{task} &nbsp;</li>)}
    </ul>
}




ReactDOM.render(<TaskApp />,
    document.getElementById('root'))