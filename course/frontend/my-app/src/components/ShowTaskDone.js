import React from 'react';

  function ShowTaskDone(props ){

    return <ul className="list-unstyled done-items">
        {
            props.tasks.map((task, key) =>
                task.done ? <li key={key}>{task.title}
                    <button className="remove-item btn btn-default btn-xs pull-right" onClick={e => { e.preventDefault(); props.onRemoveTask(key) }}>
                        <span onClick={(e) => { e.preventDefault(); props.onRemoveTask(task) }} className="glyphicon glyphicon-remove" />
                    </button>
                </li> : '')
        }      
        </ul>
}

export default ShowTaskDone;

