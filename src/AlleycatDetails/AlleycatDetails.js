import React from 'react'
import { useParams } from 'react-router'
import data from '../alleycat-data.json'
import './AlleycatDetails.css'

function AlleycatDetails(props) {
    const params = useParams()
    const { id } = params
    const { images, title, description, date, location } = data[id]

    return (
        <div className='AlleycatDetails'>
            <div className='AlleycatDetails-image'>
                <img src = {`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
            </div>
            <div className='AlleycatDetails-info'>
                <h1 className='AlleycatDetails-title'>{ title }</h1>
                <p className='AlleycatDetails-description'>{ description }</p>
                <p className='AlleycatDetails-location'>{ location }</p>
                <p className='AlleycatDetails-date'>{ date }</p>
            </div>
        </div>

    )
}
export default AlleycatDetails;


