import React from 'react'
import style from "./header.module.css"

const Header = () => {
  return (
    <div className='container'> 
      <div className={`${style.headerBackground} d-flex justify-content-between align-items-center`} >
          <div >
            <img className= {`${style.logoImage} card-img-top`}  alt='logo' src='logo1.png' />
          </div>
          <div className='d-flex  '>
            <div className='px-md-4 px-2'>Home</div>
            <div className='px-md-4 px-2'>About</div>
            <div className='px-md-4 px-2'>Services</div>
            <div className='px-md-4 px-2'>Career</div>
            <div className='px-md-4 px-2'>Contact</div>
            <div className='px-md-4 px-2'>Hire From Us</div>
            <div className='px-md-3 px-2 '>
                <button className={`${style.loginBtn} `}>Login</button>
            </div>
            <div  > 
            <button className={`${style.signupBtn} `} >Signup</button>

            </div>
          </div>
      </div>
    </div>
  )
}

export default Header