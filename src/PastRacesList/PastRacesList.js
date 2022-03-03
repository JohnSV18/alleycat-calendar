import RaceSpace from "../RaceSpace/RaceSpace";
import './PastRacesList.css';

function PastRacesList() {
    return (
        <div class="PastRacesList">
            <RaceSpace
                title='Rumble Thru the Bronx'
                description='How good do you know the bronx? Annual Rumble thru the Bronx alleycat race'
                date='Saturday, September 11th 2021'
                image='Rumble_bronx.jpeg' 
                location='Bronx, New York'/>
            <RaceSpace
                title='TrackOrDie NYC Summer Alleycat'
                description='10th anniversary of TOD Summer Alleycat'
                date='Saturday, July 10th 2021'
                image='summer_alleycat.jpeg' 
                location='Somewhere in NYC, New York'/> 
            <RaceSpace 
                title='MOBB ATL & TrackOrDie Juneteenth Alleycat'
                date='Saturday, June 19th 2021'
                image='juneteenth_mob_tod.jpeg' 
                location='Atlanta, GA'/>
            <RaceSpace 
                title='TrackOrDie Race & Bake Relay Race'
                date='Saturday, April 24th 2021'
                image='race_and_bake.jpeg' 
                location='Somewhere in NYC, New York'/>
            <RaceSpace 
                title='TrackOrDie Winter Alleycat'
                date='Saturday, Dec 18th 2021'
                image='winter_alleycat.jpg' 
                location='Somewhere in NYC, New York'/>
        </div>
    )
}
export default PastRacesList;
