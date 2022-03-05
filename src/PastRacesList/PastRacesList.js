import RaceSpace from "../RaceSpace/RaceSpace";
import './PastRacesList.css';
import data from '../alleycat-data.json'

function PastRacesList() {
    const spaces = data.map((obj,i) => {
        const { title, description, date, location, images } = obj 
        return (
            <RaceSpace
                id={i}
                key={title}
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
