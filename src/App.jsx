import TaskList from "./Components/TaskList";
import Taskform from "./Components/Taskform";
import ProgressTracker from "./Components/ProgressTracker";

function App() {
  return (
    <div>
    <h1>Taskify</h1>
    <p>Our friendly Task Manager</p>
    <Taskform />
    <TaskList />
    <ProgressTracker />
    <button>Clear All Tasks</button>
    </div>
  )
}
export default App;