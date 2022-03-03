import './RaceSpace.css';

function RaceSpace(props) {
    const { title, description, image, location, date } = props;
    return (
        <div className="RaceSpace">
            <h1> {title} </h1>
            <div>{description}</div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="hello" />
            <div>{date}</div>
            <div>{location}</div>
        </div>
    )
}
export default RaceSpace;
