import React from 'react'
import './MovieDetails.css'

export default function MovieDetails({selected}) {
    const currentDuration = (value) =>{
        const hour = Math.floor(value/3600)
        const min = Math.floor((value-hour*3600)/60)
        if(hour) return `${hour}h ${min}m`
        if(min) return `${min}m`
      }  
    return (
    <div className='MovDetContain'>
        <h3 style={{color: 'white',opacity: 0.6, textTransform: 'uppercase',fontWeight: 500,fontSize: 'x-large'}} >{selected.Category}</h3>
        {
            <img id='Title'  src={require(`./react/assets/${selected.TitleImage}`)} />
        }
        <p style={{color: 'white',fontSize: 'large'}} >{selected.ReleaseYear}, {selected.MpaRating}, {currentDuration(selected.Duration)}</p>
        <p style={{color: 'white', maxWidth: '600px',maxHeight: '150px'}} >{selected.Description}</p>
        <div className='btnGroup' >
        <button id='Play' style={{fontWeight: 600}} >Play</button>
        <button id='More' style={{fontWeight: 600,color: 'white'}} >More Info</button>
        </div>
    </div>
  )
}
