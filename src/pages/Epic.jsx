import React from 'react';
import { useParams } from "react-router-dom";
import { StoryCard } from "../components/StoryCard/StoryCard";
import NavBar from '../components/NavBar/NavBar';
import '../components/styles/App.css';
import useFetchEpicById from '../hooks/hookEpicById';
import useFetchStoriesEpic from '../hooks/hookStoriesEpic';


export const Epic = () => {
    const { epicId, projectId } = useParams();
    const { data: epic, loading: loadingEpics } = useFetchEpicById(epicId);
    const { data: stories = [], loading: loadingStories } = useFetchStoriesEpic(epicId);

    return (
        <>
            <NavBar Page={'Epic'}/>
            <main className="App-home">
                <div className="container">
                    <div className="div-epic">
                        <h1>Epic Details</h1>
                        {loadingEpics && <p>Loading Epic Details</p>}

                        {epic && (
                            <>
                                <h3>{epic.name} {epic.icon}</h3>
                                <p>{epic.description}</p>
                                <div>
                                    <h3>Stories:</h3>
                                    {
                                        loadingStories ? <p>Loading Stories...</p> :
                                            stories && stories.length > 0 ?
                                                <ul>
                                                    {stories.map(story => <StoryCard key={story._id} story={story} epicId={epicId} projectId={projectId} />)}
                                                </ul> : <p>This epic doesn't have stories</p>
                                    }
                                </div>
                            </>
                        )}
                    </div>   
                </div>
            </main>
        </>
    );
};

export default Epic;