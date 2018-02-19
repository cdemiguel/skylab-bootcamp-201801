import React from 'react';

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

    export default ShowTask;