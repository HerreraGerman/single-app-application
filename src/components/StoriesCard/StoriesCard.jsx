import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css";

export const StoriesCard = ({ stories }) => {

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
          </div>
        </Link>
      </div>
    </>
  );
}

export default StoriesCard;