import { Link } from 'react-router-dom'
import './RaceSpace.css';

function RaceSpace(props) {
    const { title, description, image, location, date, id } = props;

    return (
        <div className="RaceSpace">
            <h1>
                <Link className='RaceSpace-title' to={`/past-races/${id}`}>
                    {title}
                </Link>
            </h1>
            <Link to={`/past-races/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="hello" />
            </Link>
            <div className='RaceFacts'>
                <p>{description}</p>
                <p>Date: {date}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    )
}
export default RaceSpace;
