import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, deleteTask, toggleTask }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>toggleTask(task.id)}>
            <h3 key={task.id}>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>{deleteTask(task.id)}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
