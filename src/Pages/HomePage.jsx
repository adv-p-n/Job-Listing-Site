import React from 'react'
import Hero from '../Components/Hero'
import JobListings from '../Components/JobListings'
import HomeCards from '../Components/HomeCards'
import ViewAllJobs from '../Components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage