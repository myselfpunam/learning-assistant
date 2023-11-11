import React, { useEffect, useState } from 'react';
import './Task.css'
import logo from '../../image/profile.jpg'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Task = (props) => {
  const[time,setTime] = useState([])
  
  
 const { cart } =props
  let total = 0 ;
  for(const product of cart){
    total = total + product.time;
  }
  
    const notify = () => toast(" 😲 Congratulation! You did IT");
  return (
    <div className='details-container'>
      <div className='row profile-container'>
        <div className='col col-md-3'>
          <img className='profile img-fluid' src={logo} alt="" />
        </div>
        <div className='col col-md-9'>
          <h5>Punam Bhuyan</h5>
          <p>I am Punam Bhuyan</p>
        </div>
      </div>
      <br />
      
          <br />

          
          <div className='text-start'>
            <h3 className=''>Break time</h3>
            <div className=' break-container d-flex justify-content-evenly'>
            
            <button value={'10'} className='break-btn' onClick={e=>setTime(e.target.value)} >10m</button>
            <button value={'20'} className='break-btn' onClick={e=>setTime(e.target.value)} >20m</button>
            <button value={'30'} className='break-btn' onClick={e=>setTime(e.target.value)} >30m</button>
            <button value={'40'} className='break-btn' onClick={e=>setTime(e.target.value)} >40m</button>
            
            </div>
            <br />
            <h3>Reading Details</h3>
            <br />
            <div className='reading-container'>
            <h5 className=''>Reading Time : {total} Minutes </h5>
            <h5 className=''>Break Time : {time} Minutes </h5>
            </div>
          </div>
          <br />
          <div className='btn-container'>
            <button onClick={notify} className='complete-btn'>Complete Task  </button>
            <ToastContainer />
            <br />
            
          </div>
    </div>
  );
};

export default Task;