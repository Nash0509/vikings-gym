import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react';
import bik from './Components/bik.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faPhone, faSignIn, faInfo} from '@fortawesome/free-solid-svg-icons'

function Nav(){

  const [scrolli, setscroll] = useState(0);

  useEffect(()=>{
    const handlescroll = ()=> {
      setscroll(window.scrollY)
    }  

    window.addEventListener('scroll', handlescroll);


return ()=> window.removeEventListener('scroll', handlescroll);



  },[])


  return (
    <nav className='star' style={(scrolli>33) ? {position:'fixed', zIndex:'2', marginTop:'17vh', backgroundColor:'gold', padding:''}:{}}>
      <div className="logo" style={{padding:'0'}}>
      <h2>{scrolli<33 ? <img src={bik} alt='/logo' style={{height:'3.5rem', width:'auto', padding:'0', marginLeft:'3rem', marginTop:'0.4rem'}}/>: ""}</h2>
      </div>
     
        <ul style={(scrolli>33 ? {listStyleType:'none', display:'inline-block', paddingRight:'0.6em', margin:'0'}:{})} className='oye'>
            <li style={(scrolli>33) ? {display:'block', paddingTop:'2.7vh', color:'black', width:'4vw'}:{}}><a href='/'style={(scrolli>33) ? {color:'black'}:{}}>{(scrolli>33) ? <FontAwesomeIcon icon={faHome} size='2x'/>:"Home"}</a></li>
            <li style={(scrolli>33) ? {display:'block', width:'4vw'}:{}}><a href='/contact' style={(scrolli>33) ? {color:'black'}:{}}>{(scrolli>33) ? <FontAwesomeIcon icon={faPhone} size='2x'/>:"About"}</a></li>
            <li style={(scrolli>33) ? {display:'block', width:'4vw'}:{}}><a href='/aboutus' style={(scrolli>33) ? {color:'black'}:{}}>{(scrolli>33) ? <FontAwesomeIcon icon={faInfo} size='2x'/>:"Contact"}</a></li>
            <li style={(scrolli>33) ? {display:'block', paddingBottom:'2.83vh', width:'4vw'}:{}}><a href='/signup'style={(scrolli>33) ? {color:'black'}:{}}>{(scrolli>33) ? <FontAwesomeIcon icon={faSignIn} size='2x'/>:"SignIn"}</a></li>
        </ul>
    </nav>
  )
}

export default Nav