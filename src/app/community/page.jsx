import CollabSection from '@/components/CollabSection'
import CollaborationComponent from '@/components/CollaborationComponent'
import CoursesHeroSection from '@/components/CoursesHeroSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Typography } from '@mui/material'
import React from 'react'

function page() {
  return (
    <div className='community'>
      <Header />
      <CollaborationComponent />
      <div style={{background: "#4B61D117" , height:"10px", width:'100%'}}/>
      <div style={{marginTop:"80px"}}/>
      <Typography className='community_colabText'>Why Collab With Us ?</Typography>
      <CollabSection/>
      <div style={{marginTop:"80px"}}/>
      <Footer />
    </div>
  )
}

export default page