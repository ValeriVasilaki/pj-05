import React from 'react';
import Column from './Column';

const Board = ({tasks,setTasks}) => {

    const handleAddTask = (listName, taskName) => {

        const newTask = {id: tasks.length + 1, name: taskName};
        setTasks(prevTasks => ({
            ...prevTasks, [listName]: [...prevTasks[listName], newTask]
        }));
    };
    const handleMoveTask = (taskId, sourceList, targetList) => {

        const taskToMove = tasks[sourceList].find(task => task.id === taskId);
        setTasks(prevTasks => ({
            ...prevTasks,
            [sourceList]: prevTasks[sourceList].filter(task => task.id !== taskId),
            [targetList]: [...prevTasks[targetList], taskToMove]
        }));
    };

    return (<div className="board">
            <Column
                title="Backlog"
                tasks={tasks.backlog}
                onAddTask={taskName => handleAddTask('backlog', taskName)}
                onMoveTask={taskId => handleMoveTask(taskId, 'backlog', 'ready')}
            />
            <Column
                title="Ready"
                tasks={tasks.ready}
                onAddTask={taskName => handleAddTask('ready', taskName)}
                onMoveTask={taskId => handleMoveTask(taskId, 'ready', 'inProgress')}
            />
            <Column
                title="In Progress"
                tasks={tasks.inProgress}
                onAddTask={taskName => handleAddTask('inProgress', taskName)}
                onMoveTask={taskId => handleMoveTask(taskId, 'inProgress', 'finished')}
            />
            <Column
                title="Finished"
                tasks={tasks.finished}
                onAddTask={taskName => handleAddTask('finished', taskName)}
                onMoveTask={taskId => handleMoveTask(taskId, 'finished', 'backlog')}
            />
    </div>);
}

export default Board;