import { useState } from "react"

 export default function Taskform({addTask}) {
    const [task, setState] = useState('');
    const [priority, setPriority] = useState('medium');
    const [cat, setCat] = useState("General");


    const handlesubmit = () => {
        e.preventDefault(); //refresh
        addTask({text: task, priority, cat, completed: false});

        setState('');
        setPriority('medium');
        setCat('General');
    }
    return (
        <form onSubmit={handlesubmit}>
        <div>
           <input type="text" placeholder="Enter the task" value={task}
           onChange={(e) => setState(e.target.value)}/>
           <button type="submit">Add Task</button> 
           <h6>{task} {priority} {cat}</h6>
        </div>

        <div>
            <select  value = {priority} onChange={(e) => setPriority(e.target.value) }>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select value = {cat} onChange={(e) => setCat(e.target.value)}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>

            </select>
        </div>
        </form>
    )
}