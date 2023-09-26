import React from "react";
import style from "./cources.module.css"
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function GuaranteeCourses() {

    return (
        <div className="container ">
            <div className="d-flex justify-content-center mt-5">
                <div className={`${style.placeTxt}`}>Placement  Guaranteed </div>
                <div className={`${style.courceTxt}`}> &nbsp;Courses </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
            <div className=' border border-dark rounded-5 me-3 '>   <ArrowBackIosNewIcon />
            </div>

            <div className="row mt-4  ">
                <div className="col-4">
                    <div className="shadow rounded-4">
                        <div className={`${style.imgPosition}  `}>
                        <img alt="placement" className="card-img-top" src="gurantee1.png" />
                        <div className={`${style.internTxt}  `}>Guaranteed Internship</div>
                        </div>
                        <div className="p-4 ">
                            <div className={`${style.review} ps-2 rounded-5`}>
                                * 4.2
                            </div>
                            <div className={`${style.stackTxt} mt-3`}>Full Stack Development Course</div>
                            <div className={`${style.expertTxt} mt-3`}>With a curriculum designed and taught by industry experts</div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className={`${style.month} text-center p-2`}>
                                    <AccessTimeIcon />
                                    <div  >6 month</div>
                                </div>
                                <div className={`${style.job} text-center p-2`}>
                                    <WorkIcon />
                                    <div  >1 lac+job</div>
                                </div>
                                <div className={`${style.rupya} text-center p-2`}>
                                    <CurrencyRupeeIcon />
                                    <div  >Highest Stipend</div>
                                </div>
                            </div>
                            <div className="">
                                <button className={`${style.knowBtn} mt-3`} >Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow rounded-4">
                        <div className={`${style.imgPosition}  `}>
                        <img alt="placement" className="card-img-top" src="gurantee1.png" />
                        <div className={`${style.internTxt}  `}>Guaranteed Internship</div>
                        </div>
                        <div className="p-4 ">
                            <div className={`${style.review} ps-2 rounded-5`}>
                                * 4.2
                            </div>
                            <div className={`${style.stackTxt} mt-3`}>Data Science Course</div>
                            <div className={`${style.expertTxt} mt-3`}>With a curriculum designed and taught by industry experts</div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className={`${style.month} text-center p-2`}>
                                    <AccessTimeIcon />
                                    <div  >6 month</div>
                                </div>
                                <div className={`${style.job} text-center p-2`}>
                                    <WorkIcon />
                                    <div  >1 lac+job</div>
                                </div>
                                <div className={`${style.rupya} text-center p-2`}>
                                    <CurrencyRupeeIcon />
                                    <div  >Highest Stipend</div>
                                </div>
                            </div>
                            <div className="">
                                <button className={`${style.knowBtn} mt-3`} >Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow rounded-4">
                        <div className={`${style.imgPosition}  `}>
                        <img alt="placement" className="card-img-top" src="gurantee1.png" />
                        <div className={`${style.internTxt}  `}>Guaranteed Internship</div>
                        </div>
                        <div className="p-4 ">
                            <div className={`${style.review} ps-2 rounded-5`}>
                                * 4.2
                            </div>
                            <div className={`${style.stackTxt} mt-3`}>Digital Marketing Course</div>
                            <div className={`${style.expertTxt} mt-3`}>With a curriculum designed and taught by industry experts</div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className={`${style.month} text-center p-2`}>
                                    <AccessTimeIcon />
                                    <div  >6 month</div>
                                </div>
                                <div className={`${style.job} text-center p-2`}>
                                    <WorkIcon />
                                    <div  >1 lac+job</div>
                                </div>
                                <div className={`${style.rupya} text-center p-2`}>
                                    <CurrencyRupeeIcon />
                                    <div  >Highest Stipend</div>
                                </div>
                            </div>
                            <div className="">
                                <button className={`${style.knowBtn} mt-3`} >Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border border-dark rounded-5 ms-3 '>   <ArrowForwardIosIcon />
            </div>
            </div>
        </div>
    );
}