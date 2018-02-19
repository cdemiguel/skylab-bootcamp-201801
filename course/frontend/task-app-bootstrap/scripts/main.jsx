'use strict';
class TaskApp extends React.Component {
    constructor() {
        super()

        this.state = {
            creatingtask: '',
            tasks: []
        }

    }

    addingTask = (e) => {
        var newtask = e.target.value
        this.setState(() => {
            return {
                creatingtask: newtask
            }
        })
    }

    addTask = (e) => {
        e.preventDefault()
        var newTask = {
            title: this.state.creatingtask,
            done: false
        }
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(newTask),
                creatingtask: ''
            }
        })
    }

    changeState = (key) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.map((task, index) => {
                    if (index === key) {
                        task.done = true
                    }
                    return task
                }
                )
            }
        })
    }

    removeTask = (key) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.key !== key)
        }))
    }

    checkAllTasks() {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                task.done = true

                return task
            })
        }))
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <form onSubmit={this.addTask}>
                            <input value={this.state.creatingtask} onChange={this.addingTask} type="text" className="form-control add-todo" placeholder="Add todo" required />
                        </form>
                        
                        <hr />
                        
                        <ShowTask tasks={this.state.tasks} onChangeState={this.changeState} onCheckAllTasks={this.checkAllTasks.bind(this)} />
                
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>

                        <ShowTaskDone tasks={this.state.tasks} onRemoveTask={this.removeTask} />

                    </div>
                </div>
            </div>
        );
    }
}


function ShowTask(props){
return <div>

    <button onClick={e => { e.preventDefault(); props.onCheckAllTasks() }} className="checkAll btn btn-success">Mark all as done</button>

    <ul id="sortable" className="list-unstyled">
                            {props.tasks.map((task, key) => {
                                if(task.done===false){
                                return (
                                    <li key={key}>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""
                                                    onClick={(e) => {
                                                        e.preventDefault()

                                                        props.onChangeState(key)

                                                    }}

                                                />
                                                {task.title}
                                            </label>
                                        </div>
                                    </li>
                                )}
                            })}
                        </ul>
                <div className="todo-footer">
                <strong><span className="count-todos">{props.tasks.reduce((accum, task) => task.done ? accum : ++accum, 0)}</span></strong> Items Left
                </div>
                </div>
}


function ShowTaskDone(props){

    return <ul className="list-unstyled done-items">
        {
            props.tasks.map((task, key) =>
                task.done ? <li key={key}>{task.title}
                    <button className="remove-item btn btn-default btn-xs pull-right" onClick={e => { e.preventDefault(); props.onRemoveTask(key) }}>
                        <span onClick={(e) => { e.preventDefault(); props.onRemoveTask(task) }} className="glyphicon glyphicon-remove" />
                    </button>
                </li> : '')
        }      </ul>
}









ReactDOM.render(<TaskApp />,
    document.getElementById('root'))