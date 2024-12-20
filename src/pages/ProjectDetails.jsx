import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import useFetchProjectsById from "../hooks/hookMyProjectsByID";
import useFetchEpics from '../hooks/hookEpics';
import EpicCard from '../components/EpicCard/EpicCard';
import '../components/styles/App.css';
import useFetchUsersById from '../hooks/hookUserById';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const { data: projects, loading: loadingProjects } = useFetchProjectsById(projectId);
    const { data: epics, loading: loadingEpics } = useFetchEpics(projectId);
    const { users: usernames, loading: usersLoading } = useFetchUsersById(projects?.members);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(loadingProjects || usersLoading);
    }, [loadingProjects, usersLoading]);
    console.log("Datos en ProjectDetails:", projects);

    return (
        <>
            <NavBar Page={'Project Details'} />
            <main className="App-home">
                <div className='container'>
                    <h1>Projects Details</h1>
                    {loadingProjects && <p>Loading Project Details...</p>}

                    {projects && (
                        <>
                            <div>
                                <h2 className='project-name'><p>{projects.icon}</p>{projects.name}</h2>
                                <p className='project-description'>{projects.description}</p>
                                <p className='project-members'>
                                    Project Members:
                                    {projects.members && projects.members.length > 0 ? (
                                        <ul>
                                            {projects.members.map((memberId) => (
                                                <li key={memberId}>
                                                    {usersLoading ? 'Loading...' : usernames[memberId] && usernames[memberId].username}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span> No members in this project.</span>
                                    )}
                                </p>
                            </div>
                            <div className='container'>
                                <h3>Epics:</h3>
                                {epics && (
                                    <ul>
                                        {epics.map(epic => (
                                            <EpicCard key={epic._id}
                                                epic={epic} />
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}

export default ProjectDetails;