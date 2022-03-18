import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router'
import data from '../alleycat-data.json'
import RaceDataService from "../services/raceServices"
import './AlleycatDetails.css'

function AlleycatDetails() {
    const params = useParams()
    const  id  = params
    const [data, setData] = useState(null)
    useEffect(() => {
        RaceDataService.get(id).then(race => {
            setData(race.data)
        
            console.log("YOOOOOO",race)
        })
    })
    const generateRace = () => {
        const singleRace = data.map(e => {
            const { title, description, location, date } = e
            return(
                <div className='AlleycatDetails'>
                {/* <div className='AlleycatDetails-image'>
                    <img src = {`${process.env.PUBLIC_URL}images/${image}`} alt={title} />
                </div> */}
                <div className='AlleycatDetails-info'>
                    <h1 className='AlleycatDetails-title'>{ title }</h1>
                    <p className='AlleycatDetails-description'>{ description }</p>
                    <p className='AlleycatDetails-location'>{ location }</p>
                    <p className='AlleycatDetails-date'>{ date }</p>
                </div>
                    <p>race</p>
                </div>
            )
        })
        return singleRace
    }
    
    
    return (
        <div className='Alleycatsingle'>
            
            <p>race</p>
            <div className="RacesList">
                {data ? generateRace() : 'loading'}
            </div>
        </div>

    )
}
export default AlleycatDetails;


