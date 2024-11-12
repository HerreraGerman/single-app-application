import { Link } from "react-router-dom";
import "../styles/App.css";

export const Task = ({ task }) => {
    
    {/*const handleDelete = () => {
         if (window.confirm("Are you sure you want to delete this task?")) {
             setTasksData(prev => prev.filter(t => t._id !== task._id));
         }
     }; */} 
 
     return (
         <div className='card'>
             <h2 className='task-name'>{task.name}</h2>
             <h3 className='task-description'>{task.description}</h3>
             Created: {task.created}
             <p className = 'task-story'>Story: {task.story}</p>
             <p className={`task-status ${task.done ? "complete" : "incomplete"}`}>
                 {task.done ? "Completed" : "Incomplete"}
             </p>
             <p className = 'task-due'>Due: {task.due}</p>
           {/* <button onClick={handleDelete}>Delete Task</button> */} 
         </div>
     );
 };

 export default Task;
 