import { Link } from "react-router-dom";
import "../styles/App.css";
import useFetchUsersById from "../../hooks/hookUserById";

export const StoryCard = ({ story, projectId, epicId }) => {
    const {usernames, loading: usersLoading } = useFetchUsersById([story.assignedTo, story.owner]);

    const formatDate = (dateString) => {
        if (!dateString) return "No date";

        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); //para obtener formato DD/MM/YYYY
    };

    return (
        <Link
            to={`/my-projects/${projectId}/${epicId}/${story._id}`} className="story-link">
            <div className="card">
                <p className="story-name">{story.name}</p>
                <p className="story-description">{story.description}</p>
                <h5>Status: {story.status}</h5>
                <p>Assigned to: {usersLoading ? 'Loading...' : usernames[story.assignedTo]}</p>
                <p>Owner: {usersLoading ? 'Loading...' : usernames[story.owner]}</p>
                <p>Created: {formatDate(story.created)}</p>
            </div>
        </Link>
    );
};