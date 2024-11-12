import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css";

const ProjectCard = ({ project }) => {

  if (!project) {
    return null;
  }

  return (
    <>
      <div>
        <Link to={`/my-projects/${project._id}`} className='link-project'>
          <div className='card'>
            {project.icon}
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Members: {project.members.length > 0 ? project.members.join(', ') : "No members"}</p>
          </div>
        </Link>
      </div >
    </>
  )
}

export default ProjectCard;