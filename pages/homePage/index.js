import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import ExplorePage from '../explore'
import RecommendedJobs from '../recommendedJobs'
import LatestJobs from '../latestJobs'
import GuaranteeCourses from '../guaranteeCourses'
import GetJobs from '../getJobs'
import HiringCompanies from '../hiringCompany'
 

const Homepage = () => {
  return (
    <div>
        <Header />
        <ExplorePage />
        <RecommendedJobs />
        <GetJobs />
        <LatestJobs />
        <HiringCompanies />
        <GuaranteeCourses />
        <Footer />
    </div>
  )
}

export default Homepage