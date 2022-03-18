import RaceSpace from "../RaceSpace/RaceSpace";
import './PastRacesList.css';
import data from '../alleycat-data.json'

function PastRacesList() {
    const spaces = data.map((obj) => {
        const { title, description, date, location, images, id } = obj 
        return (
            <RaceSpace
                id={id}
                key={id}
                title={title}
                description={description}
                date={date}
                location={location}
                image={images[0]}
            />
        )
    })
    return (
        <div class="PastRacesList">
            { spaces }
        </div>
    )
}
export default PastRacesList;
