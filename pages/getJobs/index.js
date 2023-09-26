import React from 'react'
import style from "./getJobs.module.css"
const GetJobs = () => {
  return (
    <div className=' mt-5'> 
        <div className={`${style.getImage}`}>
            <img height={641} alt='getjobs' src='getJobsImage.png' /> 
       
        <div className={`${style.getMainDiv} `}>
           <div className='text-center' >
            <div className={`${style.getTxt} `}>Get <span className={`${style.jobTxt} `}>JOB</span> in 3 easy step</div>
           </div>
           <div className='mt-5 mb-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary rounded-circle'>1</button>
               <span className={`${style.spanTxt} `}> -------------------------------------------------------</span>
                <button className='btn btn-primary rounded-circle'>2</button>
                <span className={`${style.spanTxt} `}> -------------------------------------------------------</span>
                <button className='btn btn-primary rounded-circle'>3</button>
              </div>
           </div>
           <div className='row'>
            <div className='col-4'>
                <div className='text-center mt-5'>
                    <img alt='image' src='downloadImage.png'/>
                </div>
                <div className='text-center mt-2'>
                <div className={`${style.downTxt} `}>Download</div>
                <div className={`${style.appTxt} `}>our app / visit our website</div>
                </div>
            </div>
            <div className='col-4'>
                <div className='text-center mt-5'>
                    <img alt='image' src='setOrofile.png'/>
                </div>
                <div className='text-center mt-2'>
                <div className={`${style.downTxt} `}>Set Profile</div>
                <div className={`${style.appTxt} `}> Build your profile and apply jobs</div>
                </div>
            </div>
            <div className='col-4'>
                <div className='text-center mt-5'>
                    <img alt='image' src='getOffer.png'/>
                </div>
                <div className='text-center mt-2'>
                <div className={`${style.downTxt} `}>Get Offer</div>
                <div className={`${style.appTxt} `}>accept the offer join the company</div>
                </div>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default GetJobs