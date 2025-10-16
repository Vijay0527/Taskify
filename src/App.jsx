import TaskList from "./Components/TaskList";
import Taskform from "./Components/Taskform";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";

function App() {

 const [tasks, setTasks] = useState([]);

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
 });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  return (
    <div>
    <h1>Taskify</h1>
    <p>Our friendly Task Manager</p>
    <Taskform  addTask = {addTask}/>
    <TaskList />
    <ProgressTracker />
    <button>Clear All Tasks</button>
    </div>
  )
}
export default App;