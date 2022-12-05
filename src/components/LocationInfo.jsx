import React from 'react'

const LocationInfo = ({location}) => {
  return (
  
    <article className='article__box'>
        <h2 className='box__text-name'>{location?.name}</h2>
        <ul className='box__list'>
            <li className='box__list-item'><span>Type: </span>{location?.type}</li>
            <li className='box__list-item'><span>Dimension: </span>{location?.dimension}</li>
            <li className='box__list-item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
        
    </article>
  
  )
}

export default LocationInfo