
import HowWeIn from '@/components/about/HowWeIn'
import Section1 from '@/components/home/Section1'
import Section4 from '@/components/impact/Section4'
import Approach from '@/components/services/Approach'
import Map from '@/components/services/Map'
import Section2 from '@/components/services/Section2'
import React from 'react'

const Home = () => {
  return (
    <>
      <Section1 />
      <Section2 isHome={true}/>
      <HowWeIn/>
      <Approach/>
      <Section4/>
      <Map/>
    </>
  )
}

export default Home