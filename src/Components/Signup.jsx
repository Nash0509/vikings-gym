import React from 'react'
import './sign.css'
import buy from './buy.jpg'
import plan from './plan.png';
const Signup = () => {
  return (
    <div className="sign" style={{borderTop:'1px solid gold', backgroundImage:`url(${buy})`}}>
      <h2 className='ph'>Buy a <span style={{color:'gold', fontSize:'2.5rem'}}> Plan</span></h2>
       <div className="mas">
       <div className="card">
           <img src={plan} alt="img" style={{border:'2px solid gold', padding:'0', borderRadius:'10px', width:'15vw', height:'40vh'}}/>
           <div className="dis">SELECT</div>
</div>
       <div className="card">
           <img src={plan} alt="img" style={{border:'2px solid gold', padding:'0', borderRadius:'10px', width:'15vw', height:'40vh'}}/>
           <div className="dis">SELECT</div>
</div>
       <div className="card">
           <img src={plan} alt="img" style={{border:'2px solid gold', padding:'0', borderRadius:'10px', width:'15vw', height:'40vh'}}/>
           <div className="dis">SELECT</div>
</div>
       </div>
    </div>
  )
}

export default Signup