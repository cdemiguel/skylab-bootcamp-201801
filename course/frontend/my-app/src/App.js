import React, { Component } from 'react';

import './App.css';

import ShowTask from './components/showtask'
import ShowTaskDone from './components/ShowTaskDone'

class TaskApp extends Component {
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



export default TaskApp;
