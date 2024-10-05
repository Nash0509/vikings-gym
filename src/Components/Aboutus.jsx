import React from 'react'
import './about.css'
import bik from './bik.png'
import personal from './personal.jpg'
import pil from './pil.jpeg'
import sauna from './sauna.jpg'
import yoga from './yoga.jpg'
import workoutplan from './workoutplan.jpg';
import healthyfoods from './healthyfoods.jpg'
const Aboutus = () => {
  return (
    <div className="about">
     <div className="sec1">
      <h2 className='brand'>We are the <br /><span>Southern</span></h2>
      <h2 style={{textAlign:'center', fontFamily:'Lucida sans'}}><span style={{fontSize:'30px'}}>Vikings.</span></h2>
      <div className='border'></div>
      <div className="imge">
      <img src={bik} alt="" />
      </div>
      <div className='border'></div>
      <div className="comp" style={{textAlign:'center', marginTop:'1rem'}}>
        <h3>A commercial<br /><span style={{fontSize:'50px', color:'gold'}}>premium </span><br />Gym outlet.</h3>
      </div>
      <div className="alert">
      *Beaware of fake and fraudulant outlets...
      </div>
     </div>
    
     <div className="sec2" style={{paddingLeft:'1rem'}}>


      <div className='pt' style={{display:'inline'}}>
        <div className='hov' style={{marginTop:'1rem', height:'14vh', borderBottom:'1px solid gold'}}>
          <h2 style={{fontFamily:'Lucida Sans',display:'inline-block'}}>Personal <span style={{color:'gold'}}>Trainer &nbsp;<img src={personal} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto',border:'1px solid gold', paddingTop:'0',display:'inline-block', marginLeft:'0'}}/></span> </h2>
        
        </div>
     <div className='hov' style={{marginTop:'1rem', height:'14vh', marginLeft:'14.5rem', borderBottom:'1px solid gold'}}>
     
     <h2 style={{fontFamily:'Lucida Sans',display:'inline-block'}}><img src={pil} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto', border:'1px solid gold', paddingTop:'0', display:'inline-block', marginLeft:'0'}}/>&nbsp;Pilates <span style={{color:'gold'}}>Training</span></h2>
  
     </div>
      <div className='hov' style={{marginTop:'1rem', height:'14vh', marginLeft:'9rem', borderBottom:'1px solid gold'}}>
      <h2 style={{fontFamily:'Lucida Sans', paddingTop:'5px',display:'inline-block'}}><span style={{color:'gold'}}>Sauna</span>&nbsp;<img src={sauna} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto', border:'1px solid gold', paddingTop:'0', display:'inline-block', marginLeft:'0'}}/></h2>
      
      </div>
        <div className='hov' style={{marginTop:'1rem', height:'14vh', marginLeft:'14.5rem', borderBottom:'1px solid gold'}}>
        
        <h2 style={{fontFamily:'Lucida Sans',display:'inline-block'}}><img src={yoga} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto', border:'1px solid gold', paddingTop:'0', display:'inline-block', marginLeft:'0'}}/>&nbsp;Yoga<span style={{color:'gold'}}>Teacher</span></h2>
       
        </div>
        <div className='hov' style={{marginTop:'1rem', height:'14vh',  marginLeft:'3.65rem', borderBottom:'1px solid gold'}}>
        <h2 style={{fontFamily:'Lucida Sans',display:'inline-block'}}>Workout<span style={{color:'gold'}}>Plan</span>&nbsp;<img src={workoutplan} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto',border:'1px solid gold', paddingTop:'0', display:'inline-block', marginLeft:'0'}}/></h2>
        
        </div>
        <div className='hov' style={{marginTop:'1rem', height:'14vh', marginLeft:'14.5rem'}}>
       
        <h2 style={{fontFamily:'Lucida Sans',display:'inline-block'}}> <img src={healthyfoods} alt="My Image"  style={{position:'relative', zIndex:'1', marginLeft:'15vw', height:'3rem', width:'auto', border:'1px solid gold', paddingTop:'0', display:'inline-block', marginLeft:'0'}}/>&nbsp;Diet <span style={{color:'gold'}}>Plan</span></h2>
        
        </div>
     
      </div>
    
      </div>
      <div className="s4" style={{ position:'relative', zIndex:'1', boxSizing:'border-box'}}>
        <h3 style={{color:'gold', fontSize:'50px', fontFamily:'Lucida Sans', marginLeft:'5rem', marginTop:'5.5rem'}}>S<br/>e<br />r<br />v <br />i<br />c<br />e<br />s</h3>
      </div>
         
    

    </div>
  )
}

export default Aboutus