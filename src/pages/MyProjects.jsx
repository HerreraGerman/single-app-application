import ProjectCard from "../components/ProjectCard/ProjectCard";
import Navbar from "../components/NavBar/NavBar";
import { useFetchProjects } from '../hooks/hookMyProjects';

const MyProjects = () => {

    const { data: projects, loading: loadingProjects } = useFetchProjects();

    return (
        <>
            <Navbar Page={'My Projects'}/>
            <main className="App-home">
                <div className="container">
                    <h2>My Projects</h2>
                    <div>
                        {loadingProjects ? (
                            <p>Loading Projects...</p>
                        ) : projects && projects.length > 0 ? (
                            projects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))
                        ) : (
                            <p>No Projects</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default MyProjects;