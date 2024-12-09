import React from 'react';
import '../styles/App.css';
import { Task } from '../TaskCard/Task';

const TaskList = ({ tasks, storyId, onDeleteClick }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul>
                    {tasks
                        .filter(task => String(task.Story) === String(storyId))
                        .map(task => (
                            <div key={task._id} className="task-item">
                                <Task task={task} />
                                <button onClick={() => onDeleteClick(task)} className="delete-button"> Delete </button>
                            </div>
                        ))
                    }
                </ul>
            ) : (
                <span>No tasks associated with this story.</span>
            )}
        </div>
    );
};

export default TaskList;