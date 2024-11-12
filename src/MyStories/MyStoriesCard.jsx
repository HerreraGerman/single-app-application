import { Link } from 'react-router-dom';
import "../styles/App.css";

export const MyStories = ({ story }) => {
    return (
        <div>
            <Link to={`/my-stories/${story._id}`} className='story-link'>
                <div className='story-j'>
                    <p className="story-name">{story.name}</p>
                    <p className="story-description">{story.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default MyStories;