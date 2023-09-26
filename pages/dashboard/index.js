import React from 'react'
import style from "./dasboard.module.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const Dashboard = () => {
    return (
        <div className='container'>
            <div style={{ backgroundColor: "#16A6EC", height: "180px" }} className='mt-4 rounded-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='ps-5'>
                        <div className={style.banner_Text}>
                            Get Your <span style={{ color: "#FFC639" }}> Dream Job </span> with
                        </div>
                        <div className={style.banner_Text}>
                            After Passout !!
                        </div>
                        <div className='mt-3'>
                            <button style={{ color: "#17A6E8" }} className='btn btn-light rounded-pill px-3'>Apply Now</button>
                        </div>
                    </div>
                    <img src="Group18.png" alt="image" className='rounded-4' width={230} height={180} />
                </div>
                <div className="row mt-4">
                    <div className="col-3">
                        <div className='border p-3 rounded-4'>
                        <div className="form-group">
                            <label for="" className={style.form_Label}>Profile</label>
                            <input type="text" className='form-control' placeholder='e.g. mechanical engineer' />
                        </div>
                        <div className="form-group mt-3">
                            <label for="" className={style.form_Label}>Location</label>
                            <input type="text" className='form-control' placeholder='City, state, pin code' />
                        </div>
                        <div className="form-group mt-3">
                            <label for="" className={style.form_Label}>Experience</label>
                            <input type="text" className='form-control' placeholder='e.g 2years' />
                        </div>
                        <label for="" className={`mt-3 ${style.form_Label}`}>Type</label>
                        <div className="form-check">

                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Full time
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Part time
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Contractual
                            </label>
                        </div>
                        <label for="" className={`mt-3 ${style.form_Label}`}>Mode</label>
                        <div className="form-check">

                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Hybrid
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Work from home
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={`form-check-label ${style.form_checkbox}`} for="flexCheckDefault">
                                Office
                            </label>
                        </div>
                        <label for="customRange2" className={`mt-3 form-label ${style.form_Label}`}>Salary in lakh</label>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
                        <div className={`d-flex justify-content-between ${style.form_Label} text-muted`}>
                         <div>0</div>
                         <div>2</div>
                         <div>4</div>
                         <div>6</div>
                         <div>8</div>
                         <div>10</div>
                        </div>
                        </div>

                        <div style={{backgroundColor:"#FFE259"}} className='mt-3 rounded-4'>
                            <div className="p-3">
                          <div style={{color:"black",fontSize: "28px",fontWeight:500}}>Are you ready?</div>
                          <div style={{fontSize:"18px"}}>to take the next step in your career?</div>
                          <div className='mt-3'><button className='btn btn-light rounded-pill py-1' style={{color:"#EB8A24"}}>Join Our Course</button></div>
                          </div>
                          <div className="d-flex justify-content-end mt-2"><img src="Group118.png" alt="image" className='rounded-4' width={"150px"}/></div>
                        </div>
                    </div>
                    

                    <div className="col-9">
                        <div className={`d-flex justify-content-between mt-2 ${style.form_Label}`}>
                            <div> Result: 200 jobs</div>
                            <div className='d-flex align-items-center'> <div>Sort by:</div>
                                 <div className="form-group ms-1">
                                    <select className="form-select rounded-pill py-1">
                                        <option value="">Date posted</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='shadow rounded-4 p-2 px-4 mt-3'>
                            <div className="d-flex justify-content-between align-items-center">
                           <div>
                            <div><span className={`rounded-pill ${style.card_Job_Type}`}>Full time </span><span className={`ms-2 text-muted ${style.card_Job_Time}`}> 2hours ago</span></div>
                             </div>
                           <div className='p-1 px-2 border'><img src="image26.png" alt="" /></div>
                           </div>
                            <div className={style.card_Title}>Mechanical Engineer</div>
                            <div className={style.card_Title1}>Atlas Copco</div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className={`d-flex align-items-center ${style.card_Location}`}>
                                <LocationOnOutlinedIcon /> <span className={style.card_Location}> <span className='mx-1'>Pune</span> </span> <WorkOutlineOutlinedIcon />
                            <span className='ms-2'> 2 - 3 years</span> <span className='ms-2'> ₹ 3,00,000 - 3,50,000 lac </span></div>
                            <div><button className={`btn btn-outline-primary rounded-pill py-1 ${style.card_Button}`}>View Details</button><button className={`btn btn-primary rounded-pill ms-2 py-1 ${style.card_Button}`}>Apply Now</button></div>
                            </div>
                        </div>
                        
                        <div className='shadow rounded-4 p-2 px-4 mt-3'>
                            <div className="d-flex justify-content-between align-items-center">
                           <div>
                            <div><span className={`rounded-pill ${style.card_Job_Type}`}>Full time </span><span className={`ms-2 text-muted ${style.card_Job_Time}`}> 2hours ago</span></div>
                             </div>
                           <div className='p-1 px-2 border'><img src="image26.png" alt="" /></div>
                           </div>
                            <div className={style.card_Title}>Mechanical Engineer</div>
                            <div className={style.card_Title1}>Atlas Copco</div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className={`d-flex align-items-center ${style.card_Location}`}>
                                <LocationOnOutlinedIcon /> <span className={style.card_Location}> <span className='mx-1'>Pune</span> </span> <WorkOutlineOutlinedIcon />
                            <span className='ms-2'> 2 - 3 years</span> <span className='ms-2'> ₹ 3,00,000 - 3,50,000 lac </span></div>
                            <div><button className={`btn btn-outline-primary rounded-pill py-1 ${style.card_Button}`}>View Details</button><button className={`btn btn-primary rounded-pill ms-2 py-1 ${style.card_Button}`}>Apply Now</button></div>
                            </div>
                        </div>
                        <div className='shadow rounded-4 p-2 px-4 mt-3'>
                            <div className="d-flex justify-content-between align-items-center">
                           <div>
                            <div><span className={`rounded-pill ${style.card_Job_Type}`}>Full time </span><span className={`ms-2 text-muted ${style.card_Job_Time}`}> 2hours ago</span></div>
                             </div>
                           <div className='p-1 px-2 border'><img src="image26.png" alt="" /></div>
                           </div>
                            <div className={style.card_Title}>Mechanical Engineer</div>
                            <div className={style.card_Title1}>Atlas Copco</div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className={`d-flex align-items-center ${style.card_Location}`}>
                                <LocationOnOutlinedIcon /> <span className={style.card_Location}> <span className='mx-1'>Pune</span> </span> <WorkOutlineOutlinedIcon />
                            <span className='ms-2'> 2 - 3 years</span> <span className='ms-2'> ₹ 3,00,000 - 3,50,000 lac </span></div>
                            <div><button className={`btn btn-outline-primary rounded-pill py-1 ${style.card_Button}`}>View Details</button><button className={`btn btn-primary rounded-pill ms-2 py-1 ${style.card_Button}`}>Apply Now</button></div>
                            </div>
                        </div>
                        <div className='shadow rounded-4 p-2 px-4 mt-3'>
                            <div className="d-flex justify-content-between align-items-center">
                           <div>
                            <div><span className={`rounded-pill ${style.card_Job_Type}`}>Full time </span><span className={`ms-2 text-muted ${style.card_Job_Time}`}> 2hours ago</span></div>
                             </div>
                           <div className='p-1 px-2 border'><img src="image26.png" alt="" /></div>
                           </div>
                            <div className={style.card_Title}>Mechanical Engineer</div>
                            <div className={style.card_Title1}>Atlas Copco</div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className={`d-flex align-items-center ${style.card_Location}`}>
                                <LocationOnOutlinedIcon /> <span className={style.card_Location}> <span className='mx-1'>Pune</span> </span> <WorkOutlineOutlinedIcon />
                            <span className='ms-2'> 2 - 3 years</span> <span className='ms-2'> ₹ 3,00,000 - 3,50,000 lac </span></div>
                            <div><button className={`btn btn-outline-primary rounded-pill py-1 ${style.card_Button}`}>View Details</button><button className={`btn btn-primary rounded-pill ms-2 py-1 ${style.card_Button}`}>Apply Now</button></div>
                            </div>
                        </div>
                        <div className='shadow rounded-4 p-2 px-4 mt-3'>
                            <div className="d-flex justify-content-between align-items-center">
                           <div>
                            <div><span className={`rounded-pill ${style.card_Job_Type}`}>Full time </span><span className={`ms-2 text-muted ${style.card_Job_Time}`}> 2hours ago</span></div>
                             </div>
                           <div className='p-1 px-2 border'><img src="image26.png" alt="" /></div>
                           </div>
                            <div className={style.card_Title}>Mechanical Engineer</div>
                            <div className={style.card_Title1}>Atlas Copco</div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className={`d-flex align-items-center ${style.card_Location}`}>
                                <LocationOnOutlinedIcon /> <span className={style.card_Location}> <span className='mx-1'>Pune</span> </span> <WorkOutlineOutlinedIcon />
                            <span className='ms-2'> 2 - 3 years</span> <span className='ms-2'> ₹ 3,00,000 - 3,50,000 lac </span></div>
                            <div><button className={`btn btn-outline-primary rounded-pill py-1 ${style.card_Button}`}>View Details</button><button className={`btn btn-primary rounded-pill ms-2 py-1 ${style.card_Button}`}>Apply Now</button></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                        <div className='col-4 d-flex justify-content-between align-items-center'> {"< "} <span> Prev</span> <button className='btn btn-primary btn-sm'>1</button> <button className='btn btn-primary btn-sm'>2</button> <button className='btn btn-primary btn-sm'>3</button> <button className='btn btn-primary btn-sm'>4</button> ... <button className='btn btn-primary btn-sm'>5</button> <span> Next</span> {" >"}</div>
                   
                        </div> </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;