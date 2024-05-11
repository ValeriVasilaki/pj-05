import React from 'react';
import {Link} from 'react-router-dom';


const Task = ({task, onMoveTask}) => {
    if (undefined !== task) {
        return (<div className="task">
            <Link to={`/tasks/${task.id}`}>
                <h3>{task.name}</h3>
            </Link>
            <button onClick={() => onMoveTask(task.id)}>Move</button>
        </div>);
    }
}
export default Task;