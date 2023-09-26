import React from 'react'
import style from "./recomm.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const RecommendedJobs = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='fs-2 fw-bold'>Recommended Jobs</div>
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

export default RecommendedJobs