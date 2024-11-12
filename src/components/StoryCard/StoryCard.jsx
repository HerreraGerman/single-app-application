import { Link } from "react-router-dom";
import "../styles/App.css";

export const StoryCard = ({ story, projectId, epicId }) => {
    return (
        <Link
            to={`/my-projects/${projectId}/${epicId}/${story._id}`} className="story-link">
            <div className="card">
                <p className="story-name">{story.name}</p>
                <p className="story-description">{story.description}</p>
                <h5>Status: {story.status}</h5>
                <p>Assigned to: {story.assignedTo}</p>
                <p>Points:{story.points}</p>
                <p>Created: {story.created}</p>
                <p>Owner: {story.owner}</p>
            </div>
        </Link>
    );
};