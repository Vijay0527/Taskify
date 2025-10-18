import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');

  // Update body class when theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
     newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div className="App">
      <header>
      <h1 className="title">Taskify</h1>
      <p className="tagline">Your friendly TaskManager</p>
      </header>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}
      
    </div>
  )
}