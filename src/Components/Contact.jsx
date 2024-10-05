import React from 'react'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = () => {
  return (
   <div className="contact">
    <div className="main">
    <h3 style={{color:'white', position:'relative', zIndex:'2', marginLeft:'35vw', fontSize:'30px'}}>Want to <span style={{color:'gold', fontSize:'40px'}}>know</span> more?</h3>
    <form action="contact">
       <label htmlFor="fname">First Name: </label>
       <input type="text" placeholder='First Name'/><br />
       <label htmlFor="city">City:</label>
       <input type="text" name="city" placeholder='City'/><br />
       <label htmlFor="Phone no">Phone No.:</label>
       <input type="number" placeholder='1234567890'/><br />
       <input type="submit" style={{fontFamily:'Lucida Sans', padding:'0.4rem'}}/>

    </form>
    </div>
    
   </div>
  )
}

export default Contact