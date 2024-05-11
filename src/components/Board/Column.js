import React from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

const Column = ({title, tasks, onAddTask, onMoveTask}) => {

    return (<div className="column">
        <h2>{title}</h2>
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} onMoveTask={onMoveTask}/>
            ))}
        </div>
        <AddTaskForm onAddTask={onAddTask} />
    </div>);
}

export default Column;