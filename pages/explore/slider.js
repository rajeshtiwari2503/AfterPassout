import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./explore.module.css"

export default function ExploreSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <div className={`${style.sliderCard1}   `}  >
                    <div className={`${style.unlockTxt} pt-3 `}>Unlock Opportunities, Gain Experience</div>
                    <div className={`${style.discoverTxt} mt-3  `}>Discover exciting internship opportunities</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtnTxt} ps-3  `}>Explore Internship</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.sliderCard2}   ms-3 me-3  `}  >
                    <div className={`${style.placeTxt} pt-3 `}>Placement guarantee cources</div>
                    <div className={`${style.guranteeTxt} mt-2  `}>100% Guaranteed placement</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtn2Txt} ps-3  `}>Explore Cource</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.sliderCard1} me-3`}  >
                    <div className={`${style.unlockTxt} pt-3 `}>Unlock Opportunities, Gain Experience</div>
                    <div className={`${style.discoverTxt} mt-3  `}>Discover exciting internship opportunities</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtnTxt} ps-3  `}>Explore Internship</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.sliderCard1}  `}  >
                    <div className={`${style.unlockTxt} pt-3 `}>Unlock Opportunities, Gain Experience</div>
                    <div className={`${style.discoverTxt} mt-3  `}>Discover exciting internship opportunities</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtnTxt} ps-3  `}>Explore Internship</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.sliderCard2} ms-3 me-3  `}  >
                    <div className={`${style.placeTxt} pt-3 `}>Placement guarantee cources</div>
                    <div className={`${style.guranteeTxt} mt-2  `}>100% Guaranteed placement</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtn2Txt} ps-3  `}>Explore Cource</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.sliderCard1} me-3 `}  >
                    <div className={`${style.unlockTxt} pt-3 `}>Unlock Opportunities, Gain Experience</div>
                    <div className={`${style.discoverTxt} mt-3  `}>Discover exciting internship opportunities</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className={`${style.exBtnTxt} ps-3  `}>Explore Internship</div>
                        </div>
                        <img width={100} height={80} className='card-img-top1' src='explore1.png' alt='explore' />
                    </div>
                </div>
            </div>
        </Slider>
    );
}