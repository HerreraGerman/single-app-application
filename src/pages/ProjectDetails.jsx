import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import useFetchProjectsById from "../hooks/hookMyProjectsByID";
import useFetchEpics from '../hooks/hookEpics';
import EpicCard from '../components/EpicCard/EpicCard';
import '../components/styles/App.css';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const { data: projects, loading: loadingProjects } = useFetchProjectsById(projectId);
    const { data: epics, loading: loadingEpics} = useFetchEpics(projectId);

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
                                <h2 className='project-name'>{projects.name}</h2>
                                <p className='project-description'>{projects.description}</p>
                                <p className='project-members'>
                                    Project Members: 
                                    {projects.members.length > 0 ? (
                                        <ul>
                                            {projects.members.map((member, index) => (
                                                <li key={index}>{member}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span> No members in this project.</span>
                                    )}
                                </p>
                            </div>
                            <div className='container'>
                                <h3>Epics:</h3>
                                {
                                    loadingEpics ? <p>Loading epics... </p> :
                                        epics && epics.length > 0 ?
                                            <ul>
                                                {epics.map(epic => <EpicCard key={epic._id} epic={epic} />)}
                                            </ul> : <p>This projects doesn't have epics</p>
                                }
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}

export default ProjectDetails;