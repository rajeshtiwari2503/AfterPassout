import React from 'react'
import style from "./latest.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LatestJobs = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='d-flex justify-content-between align-items-center'>
            <div className='fs-2 fw-bold'>Latest Jobs</div>
            <div className='d-flex align-items-center'>
            <div className='  border border-dark rounded-5'> <ArrowBackIosNewIcon  /></div>
            <div className='ms-2'>&nbsp;</div>
             <div className=' border border-dark rounded-5  '>  <ArrowForwardIosIcon /></div>
            </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4   '>
                    <div className=' shadow rounded-4'>
                        <div className='p-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className={`${style.fullTxt} ps-3 pe-3`}>Full Time</div>
                                <div>
                                    <img className='  rounded-5 ' width={60} height={60} src='atlasLogo.png' alt='logo' />
                                </div>
                            </div>
                            <div className={`${style.engTxt} mt-3`}>Mechanical Engineer</div>
                            <div className={`${style.atlasTxt} `}>Atlas Copco</div>
                            <div className={`${style.loca} d-flex justify-content-between mt-3 `}>
                                <div><LocationOnIcon /> Pune</div>
                                <div> <WorkIcon />  0-3 years</div>
                                <div><CurrencyRupeeIcon /> 4K</div>
                                <div><AccessTimeIcon />  2hours ago</div>
                            </div>
                            <div className='mt-4'>
                                <div className=' d-flex justify-content-end   '>
                                    <button className={`${style.viewBtn} me-2`}>View Details</button>
                                    <button className={`${style.applyBtn} `} >Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4    '>
                    <div className=' shadow rounded-4 '>
                        <div className='p-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className={`${style.fullTxt} ps-3 pe-3`}>Full Time</div>
                                <div>
                                    <img className='  rounded-5 ' width={60} height={60} src='atlasLogo.png' alt='logo' />
                                </div>
                            </div>
                            <div className={`${style.engTxt} mt-3`}>Mechanical Engineer</div>
                            <div className={`${style.atlasTxt} `}>Atlas Copco</div>
                            <div className={`${style.loca} d-flex justify-content-between mt-3 `}>
                                <div><LocationOnIcon /> Pune</div>
                                <div> <WorkIcon />  0-3 years</div>
                                <div><CurrencyRupeeIcon /> 4K</div>
                                <div><AccessTimeIcon />  2hours ago</div>
                            </div>
                            <div className='mt-4'>
                                <div className=' d-flex justify-content-end   '>
                                    <button className={`${style.viewBtn} me-2`}>View Details</button>
                                    <button className={`${style.applyBtn} `} >Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4    '>
                    <div className=' shadow rounded-4'>
                        <div className='p-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className={`${style.fullTxt} ps-3 pe-3`}>Full Time</div>
                                <div>
                                    <img className='  rounded-5 ' width={60} height={60} src='atlasLogo.png' alt='logo' />
                                </div>
                            </div>
                            <div className={`${style.engTxt} mt-3`}>Mechanical Engineer</div>
                            <div className={`${style.atlasTxt} `}>Atlas Copco</div>
                            <div className={`${style.loca} d-flex justify-content-between mt-3 `}>
                                <div><LocationOnIcon /> Pune</div>
                                <div> <WorkIcon />  0-3 years</div>
                                <div><CurrencyRupeeIcon /> 4K</div>
                                <div><AccessTimeIcon />  2hours ago</div>
                            </div>
                            <div className='mt-4'>
                                <div className=' d-flex justify-content-end   '>
                                    <button className={`${style.viewBtn} me-2`}>View Details</button>
                                    <button className={`${style.applyBtn} `} >Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestJobs