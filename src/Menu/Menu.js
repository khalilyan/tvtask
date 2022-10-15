import React, { useEffect, useState } from 'react'
import './Menu.css'
import avatar from '../Components/react/avatar.png'
import { icons } from '../Components/react/assets/icons/Icons'

export default function Menu() {
    const [menuRoot, setMenuRoot] = useState(icons[1].title);
    useEffect(()=>{
        const selected =document.getElementById(menuRoot);
        const notSelected =document.getElementsByName('btn') ;
        notSelected.forEach((el)=>{
            el.style.background = 'none'
        });
        selected.style.backgroundColor = 'rgb(44, 41, 41)'
    },[menuRoot])

  return (
    <div className='MenuContain' >

        <div className='personal' >
        <img id='avatar' src={avatar} />
        <p style={{color:'white'}} >Armen</p>
        </div>
        
        <div className='btnList' >
        {
            icons.map(icon=>{
                return (
                    <button 
                    className='Menubtn'
                    name='btn'
                    id={icon.title}
                    key={icon.title}
                    onClick={()=>setMenuRoot(icon.title)}
                    >
                        <img width={20}
                        height={20} src={icon.root} />
                        <p className='rootName' >{icon.title}</p>
                    </button>
                )
            })
        }
        <div className='MenuMore'>
            <p>LANGUAGE</p>
            <p>GET HELP</p>
            <p>EXIT</p>
        </div>
        </div>
    </div>
  )
}
