import React from 'react'
import HomeBanner from './Home/Banner'
import HomeAbout from './Home/HomeAbout'
import HomeExperience from './Home/HomeExperience'
import HomeProjects from './Home/HomeProjects'
import HomeSkills from './Home/HomeSkills'
import HomeContact from './Home/HomeContact'

function Home() {
  return (
    <>
    <HomeBanner/>
    <HomeAbout/>
    <HomeSkills/>
    <HomeExperience/>
    <HomeProjects/>
    <HomeContact/>
    </>
  )
}

export default Home