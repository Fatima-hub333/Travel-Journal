import React from 'react'
import pathImage from './images/Path.png'

export default function Cards(props) {
  return (
    <div className="card-body">
      <img src={props.items.imageUrl} className="card-img" alt="Image1" />
      <div className='card-info'>
        <div className='card-location'>
          <span className='loc-name'>
            <span className='location'>
              <img src={pathImage} className='path-img' alt="Img" />
              {props.items.location.toUpperCase()}
            </span>
            <a className='card-link' href={props.items.googleMapUrl} target='_blank' rel="noreferrer" > View on Google Map</a>
          </span>
        </div>
        <h1>{props.items.title}</h1>
        <div className='date'>
          <span>
            {props.items.startDate} - {props.items.endDate}
          </span>
        </div>
        <p className='description'> {props.items.description} </p>
      </div>
    </div>
  )
}
