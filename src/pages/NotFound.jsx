import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate();
  return (
    <div className='container p-5 mt-5'>
        <div className=' p-5 text-center mt-5'>
            <h1 className='text-primary-emphasis fs-1 fw-bold mt-5' style={{fontSize: "3rem"}}>404</h1>
            <h3>Oops! Something went wrong</h3>
            <p className='text-secondary'>The page you are looking for doesn't exist, isn't available or was loading incorrectly</p>
            <button className='btn btn-success' onClick={()=>navigate('/home')}>Go back to Home</button>
        </div>
      
    </div>
  )
}

export default NotFound
