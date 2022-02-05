import React from 'react'
import Task from './Task'

const Tasks = ({tasks,  onDeleteTask,  onToggleTask }) => {
    return (
        <>
            {tasks.map((task)=>(<Task key={task.id} task={task} deleteTask={onDeleteTask} toggleTask={onToggleTask} />))}
        </>
    )
}

export default Tasks

