import React from "react";



const ItunesDetails = (props) => {
  if (!props.songs) return null;
  return (
    <div>
      <h1>{props.song.name}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <img className="flag" src={props.country.flag} alt={`Flag of ${props.country.name}`}/>
    </div>
  )
}

export default ItunesDetails;
