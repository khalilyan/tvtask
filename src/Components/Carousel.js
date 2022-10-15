import React, { useState } from 'react'
import './Carousel.css'

export default function Carousel({setSelected,data}) {

    const [local, setLocal] = useState([])
   
  return (
    <div>
        <p style={{color: 'white',fontSize:20,margin:'10px 10px'}}>Trending Now</p>
      <div className='CarouselContain' >
          <div className='slider' >
              {
                  data && data.TendingNow.map(cover=>{
                      return (
                          <img 
                          key={Math.random()}
                          id='coverItem' 
                          src={require(`./react/assets/${cover.CoverImage}`)}
                          onClick={()=>{
                            setSelected(cover)
                            setLocal([cover,...local])
                            localStorage.setItem('Watched',JSON.stringify(local))
                        }}
                          />
                      )
                  })
              }
        </div>
      </div>
    </div>
  )
}
