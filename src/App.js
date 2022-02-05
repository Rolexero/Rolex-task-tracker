import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddForm, setshowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async ()=>{
      const getTaskFromDb = await fetchTasks();
      setTasks(getTaskFromDb)                                            
    }
    getTasks()
  }, [])

  // fetch Tasks
  const fetchTasks = async ()=>{
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json();
    return data;  
}

const fetchTask = async (id)=>{
  const response = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await response.json();
  return data;  
}


  // Add task
  const addTask = async(task) =>{
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {                                                                                                                                                                                                                                                                                                                                                                                  
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const newTask = await res.json()                                                                                                                                                                                                                  
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      setTasks(tasks.filter((task)=>task.id !== id))
  }

  // Toggle Reminder
  const toggleTask = async (id) =>{
    const fetchTaskData = await fetchTask(id)
    const updTask = {...fetchTaskData, reminder: !fetchTaskData.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task)=>
      task.id === id ? { ...task, reminder: data.reminder} : task
    ))
  }
  return (
    <Router>
    <div className="container">
      <Header title='Task Tracker' onAddForm={()=>setshowAddForm(!showAddForm)} showAdd={showAddForm} />
<Routes>
  <Route  path="/" exact element={<>{showAddForm && <AddTask addTask={addTask} />} {tasks.length === 0 ? 'No task available' : <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask}/>
}
</>} />
    
<Route path='/about' element={<About/>} />
</Routes>
<Footer />
    </div>
  </Router>
  );
}

export default App;
