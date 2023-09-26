import React from 'react'
import style from "./explore.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExploreSlider from './slider';

const ExplorePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div   >
      <div style={{ position: "relative" }}>
        <img width="100%" src='exploreImage.png' />
        <div style={{ position: "absolute", top: "70px", left: "8%", right: "8%" }}>
          <div className='container'>
            <div className='row d-flex justify-content-between'>
              <div className='col-5'>
                <div className={`${style.getTxt}`}>Get Your</div>
                <div className={`${style.firstTxt}`}>First <span className={`${style.jobTxt}`}>JOB!!</span></div>
                <div className={`${style.startTxt}`}>Start Your Career With Us</div>
                <div>
                  <button className={`${style.exploreBtn} mt-3 p-2`}> &nbsp;&nbsp;&nbsp;Explore Now <ArrowForwardIcon />&nbsp;&nbsp;&nbsp;</button> </div>
              </div>
              {/* <div className='col-2'></div> */}
              <div className='col-6'>
                <div>
                  <img className='card-img-top' alt='student' src='GroupStdImage2.png' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container'>
        <div style={{marginTop:"-120px"}} className='row1 '>
        
        
        </div>
        <ExploreSlider />
      </div>
    </div>
  )
}

export default ExplorePage