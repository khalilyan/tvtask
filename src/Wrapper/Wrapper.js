import React, { useEffect, useRef, useState } from 'react'
import MovieDetails from '../Components/MovieDetails'
import Carousel from '../Components/Carousel'
import './Wrapper.css'

export default function Wrapper({selected,setSelected,data}) {
   const [video, setVideo] = useState(selected.VideoUrl)
    const videoRef = useRef();
    const WrapperRef = useRef();
    if(selected.VideoUrl){
        WrapperRef.current.style.background = 'black'
    }
   useEffect(() => {
       setTimeout(() => {
        setVideo(selected.VideoUrl)
        const el = videoRef.current
        el.load()
    }, 2000);
   }, [selected])
   
  return (
    <div className='Wrapper' ref={WrapperRef}  >
      <MovieDetails selected={selected} />
      <Carousel  data={data} selected={selected} setSelected={setSelected} />
      {
        selected.VideoUrl && <div>
          <video ref={videoRef} autoPlay muted loop id="MovieVideo">
            <source  src={selected.VideoUrl} id='Source' type="video/mp4"/>
          </video>
        </div>
      }
    </div>
  )
}
