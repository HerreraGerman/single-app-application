import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import { useFetchStoryById } from "../hooks/hookStoryById";
import { useFetchTasks } from '../hooks/hookTask';
import { Task } from '../components/TaskCard/Task';
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import DeleteConfirmation from "../components/StoryDeleteConfirmation/StoryDeleteConfirmation";
import '../components/styles/App.css';
import * as AiIcons from "react-icons/ai";

export const Story = () => {
    const { storyId } = useParams();
    const { data: storiesData, loading: loadingStories } = useFetchStoryById(storyId);
    const { data: storiesTask, loading: loadingTasks } = useFetchTasks(storyId);

    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);

    const handleTaskAdded = () => {
        setShowAddTaskForm(false);
        window.location.reload();
    };

    const handleDeleteClick = (task) => {
        setTaskToDelete(task);
        setShowDeleteConfirm(true);
    };

    const handleDeleteTask = async () => {
        if (!taskToDelete) return;

        setIsSubmitting(true);
        const token = localStorage.getItem("authToken");

        try {
            const response = await fetch(`http://localhost:3000/api/stories/${storyId}/tasks/${taskToDelete._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.ok) {
                setShowDeleteConfirm(false);
                setTaskToDelete(null);
                window.location.reload();
            } else {
                const error = await response.json();
                alert("Error deleting task: " + error.message);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Error deleting task");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <NavBar Page={'My Story'} />
            <main className="App-home">
                <div className="container">
                    <h1>Story Details</h1>
                    {loadingStories && <p>Loading Story Details...</p>}

                    {storiesData && (
                        <>
                            <div>
                                <p>{storiesData.icon}</p>
                                <h2 className='story-name'>{storiesData.name}</h2>
                                <p className='story-description'>{storiesData.description}</p>
                            </div>

                            <div>
                                <div>
                                    <h3>
                                        Tasks
                                        <button className='task-button' onClick={() => setShowAddTaskForm(true)}> Add Task </button>
                                    </h3>
                                </div>
                                {showAddTaskForm && (
                                    <TaskForm
                                        storyId={storyId}
                                        onTaskAdded={handleTaskAdded}
                                    />
                                )}

                                {loadingTasks && <h3>Loading tasks...</h3>}
                                <TaskList
                                    tasks={storiesTask}
                                    storyId={storyId}
                                    onDeleteClick={handleDeleteClick}
                                />
                            </div>
                        </>
                    )}

                    {showDeleteConfirm && (
                        <DeleteConfirmation
                            onConfirmDelete={handleDeleteTask}
                            onCancel={() => setShowDeleteConfirm(false)}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </div>
            </main>
        </>
    );
};

export default Story;