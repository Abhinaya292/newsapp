import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpComing = () => {

  let navigate = useNavigate();

  return (
    <div className='container my-5 card p-5 shadow border border-success rounded-5'>
        <div className='row m-5'>
          <div className="col-sm-12 col-md-6 col-lg-6 p-3"> 
            <div>
              <h2 className='text-primary-emphasis'>We're building something new and exciting!</h2>
              <p className='my-4'>Meanwhile checkout our website with latest news and know what's happening in the world.</p>
              <button className='btn btn-success' onClick={()=>navigate('/home')}>Get back to Home </button>

            </div>  
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <img src="./src/assets/upcoming.png" alt="" />
 
          </div>
            

        </div>
      
    </div>
  )
}

export default UpComing
