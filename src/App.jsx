import TaskList from "./Components/TaskList";
import Taskform from "./Components/Taskform";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";
import "./Style.css"

function App() {

 const [tasks, setTasks] = useState([]);

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

   const updateTask = (updatedTask, index) => {
     const newtask = [...tasks];
     newtask[index] = updateTask;
     setTasks(newtask);
   }

   const deleteTask = (index) => {
     setTasks(tasks.filter((_, i) => i != index));
   }

  return (
    <div>
    <h1>Taskify</h1>
    <p>Our friendly Task Manager</p>
    <Taskform  addTask = {addTask}/>
    <TaskList  tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
    <ProgressTracker />
    <button>Clear All Tasks</button>
    </div>
  )
}
export default App;