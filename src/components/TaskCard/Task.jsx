import "../styles/App.css";

export const Task = ({ task }) => {
    
    const formatDate = (dateString) => {
        if (!dateString) return "No date";
        
        const date = typeof dateString === "string" ? new Date(dateString) : dateString;
        return date.toLocaleDateString('en-GB');
    };

     return (
         <div className='card'>
             <h2 className='task-name'>{task.name}</h2>
             <h3 className='task-description'>{task.description}</h3>
             Created: {formatDate(task.created)}
             <p className = 'task-story'>Story: {task.story}</p>
             <p className={`task-status ${task.done ? "complete" : "incomplete"}`}>
                 {task.done ? "Completed" : "Incomplete"}
             </p>
             <p className = 'task-due'>Due: {formatDate(task.due)}</p>
         </div>
     );
 };

 export default Task;
 