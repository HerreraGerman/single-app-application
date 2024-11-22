import { Link } from "react-router-dom";
import "../styles/App.css";

export const EpicCard = ({ epic }) => {

    return (
        <>
            <Link
                to={`/my-projects/${epic.project}/${epic._id}`} className='epic-link'>
                <div className='card'>
                    <h2 className="name-epic">{epic.name}</h2>
                    <p className="description-epic">
                        {epic.description}
                    </p>
                    <p className="icon-epic">{epic.icon}</p>
                </div>
            </Link>
        </>
    );
}

export default EpicCard;
