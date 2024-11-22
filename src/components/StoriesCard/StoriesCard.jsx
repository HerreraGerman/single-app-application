import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css";
import useFetchUsersById from '../../hooks/hookUserById';

export const StoriesCard = ({ stories }) => {
  const assignedToArray = stories.assignedTo
    ? String(stories.assignedTo).split(',').map(id => id.trim())
    : [];

  const { usernames } = useFetchUsersById(assignedToArray);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  if (!stories) {
    return null;
  }

  return (
    <>
      <div>
        <Link to={`/my-stories/${stories._id}`} className='story-link'>
          <div className='card'>
            <h3 className="story-name">{stories.name}</h3>
            <p className="story-description">{stories.description}</p>
            <h5>Status: {stories.status}</h5>
            <p>Created: {formatDate(stories.created)}</p>
            <p>
              Assigned to: {assignedToArray.length > 0
                ? assignedToArray.map(id => usernames[id] || id).join(', ')
                : "No assignments"
              }
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default StoriesCard;