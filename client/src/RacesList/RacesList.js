import React, { Component, useEffect, useState } from "react";
import RaceDataService from "../../src/services/raceServices";
import RaceSpace from "../RaceSpace/RaceSpace";
import { NavLink } from "react-router-dom";
import "../RacesList/RacesList.css";

function RacesList() {
  const [data, setData] = useState(null)
  useEffect(() => {
    RaceDataService.getAll().then(races => {
      setData(races.data)
    })
  })

  const generateRaces = () => {
    const raceList = data.map(e => {
      const { title, description, location, date, id} = e
      return(
        <RaceSpace
          id={id}
          key={title}
          title={title}
          description={description}
          date={date}
          location={location}
        />
      )
    })
    return raceList
  }
  return(
    <div className="RascesList">
      <h1>Races</h1> 
      
      {/* DisplaysPosts */}
      <div className="RacesList">
        {data ? generateRaces() : 'loading'}
      </div>
     </div>
  )
}
export default RacesList;