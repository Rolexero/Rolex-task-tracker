import React from 'react'
import { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text, settext] = useState('')
    const [day, setday] = useState('')
    const [reminder, setreminder] = useState(false)

    const submit = (e) =>{
        e.preventDefault();

        if (!text) {
            alert('please add a text')
            return
        }

        addTask({text, day, reminder});
        settext('');
        setday('');
        setreminder(false);
    }

    return (
        <form action="" className="add-form" onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>settext(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="datetime-local" placeholder="Add Day & Time"  value={day} onChange={(e)=>setday(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
