import Link from 'next/link'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import style from "./footer.module.css"

const Footer = () => {
    return (

        <>

            <div >
                <div style={{backgroundColor:"#16A6EC"}}>
                  <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-3'>
                         <div className='bg-white p-2 rounded d-flex justify-content-center align-itens-center'>
                            <img   alt='student'src='studentImage.png' />
                            <div  className='ms-3'>
                            <div className={`${style.stdTxt}`} >10K + </div>
                            <div className={`${style.stdTxt2}`}>Student Placed</div>
                            </div>
                         </div>
                        </div>
                        <div className='col-3'>
                         <div className='bg-white p-2 rounded d-flex justify-content-center align-itens-center'>
                            <img   alt='student'src='companyImage.png' />
                            <div  className='ms-3'>
                            <div className={`${style.stdTxt}`} >100K + </div>
                            <div className={`${style.stdTxt2}`}>companies hiring</div>
                            </div>
                         </div>
                        </div>
                        <div className='col-3'>
                         <div className='bg-white p-2 rounded d-flex justify-content-center align-itens-center'>
                            <img   alt='student'src='studentActImage.png' />
                            <div  className='ms-3'>
                            <div className={`${style.stdTxt}`} >200K + </div>
                            <div className={`${style.stdTxt2}`}>active student  </div>
                            </div>
                         </div>
                        </div>
                        <div className='col-3'>
                         <div className='bg-white p-2 rounded d-flex justify-content-center align-itens-center'>
                            <img    alt='student'src='openingImage.png' />
                            <div  className='ms-3'>
                            <div className={`${style.stdTxt}`} >10K + </div>
                            <div className={`${style.stdTxt2}`}>opening everyday</div>
                            </div>
                         </div>
                        </div>
                    </div>
                    
                  </div>
                </div>
                <footer
                    className="  text-start text-dark"
                    style={{ backgroundColor: "#fffff" }}
                >
                    <section className="container">

                        <div className="row mb-5 d-flex justify-content-between">

                            <div className="col-3    mt-3">
                                <div>
                                    <img className={` card-img-top`} alt='logo' src='logo1.png' />

                                </div>
                                <div className='mt-3' >
                                    We have the infrastructure to address the widespread issue of freshly graduated students needing help getting their dream job.
                                </div>
                                <div className='d-flex justify-content-between mt-4 '>
                                    <FacebookIcon style={{color:"#16A6EC"}}/>
                                    <InstagramIcon style={{color:"#16A6EC"}} />
                                    <LinkedInIcon  style={{color:"#16A6EC"}}/>
                                    <YouTubeIcon style={{color:"#16A6EC"}}/>
                                </div>
                            </div>
                            <div className="col-1">&nbsp;</div>
                            <div className="col-2  mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                                <div >
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>About Us</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Mentership</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Resume writing</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Career</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Blogs</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Contact</div></Link>
                                </div>
                            </div>
                            <div className="col-2   mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Others
                                </h6>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Jobs By Streem</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Marketing JOBS</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Mechanical JOBS</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Electrical JOBS</div></Link>
                                </div>
                                <div>
                                    <Link className='text-decoration-none' href={"about"}><div className= {`${style.linkTxt}`}>Software JOBS</div></Link>
                                </div>

                            </div>

                            <div className="col-4  mt-3 ">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                                 
                                <div className='d-flex align-items-center '>
                                    <div className='bg-info rounded-5 p-1'> <LocationOnIcon style={{ color: "white" }} /></div>
                                    <div className='ms-2'>Noida One IT Park,B-8, sector 62,Noida Uttar Pradesh-201301</div>
                                </div>
                                <div className='d-flex align-items-center' style={{ marginTop: "13px", marginBottom: "13px" }}>
                                    <div className='bg-info rounded-5 p-1'> <PhoneIcon style={{ color: "white" }} /></div>
                                    <div className='ms-2'>+91 7217700703</div>
                                </div>
                                <div className='d-flex align-items-center mb-5'>
                                    <div className='bg-info rounded-5 p-1'> <EmailIcon style={{ color: "white" }} /></div>
                                    <div className='ms-2'>info@afterpassout.com</div>
                                </div>

                            </div>

                        </div>

                    </section>
                    <div className=' mt-5'></div>
                    <hr className='ms-3 me-3  ' />

                    < div className=" container">
                        <div className="row d-flex align-items-center">

                            <div className="col-12 text-center  ">

                                <div style={{ fontSize: "14px", color: "#BEBEBE" }}>
                                    Copyright © AFTER PASSOUT PRIVATE LIMITED.All rights reserved | Privacy Policy | Term & Conditions | Cancellation & Refund Policy | Shipping & Delivery Policy

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        </>


    )
}

export default Footer