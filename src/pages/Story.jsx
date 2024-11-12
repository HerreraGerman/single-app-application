import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import { useFetchStoryById } from "../hooks/hookStoryById";
import { useFetchTasks } from '../hooks/hookTask';
import { Task } from '../components/TaskCard/Task';
import '../components/styles/App.css';
import * as AiIcons from "react-icons/ai";

export const Story = () => {
    const { storyId } = useParams();
    const { data: storiesData, loading: loadingStories } = useFetchStoryById(storyId);
    const { data: storiesTask, loading: loadingTasks } = useFetchTasks(storyId);

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
                                <h3>Tasks</h3>
                                {loadingTasks && <h3>Loading tasks...</h3>}
                                {storiesTask.length > 0 ? (
                                    <ul className='container'>
                                        {storiesTask.filter(task => task.story === storyId).map(task => (
                                            <Task key={task._id} task={task} />
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No tasks associated with this story.</span>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Story;