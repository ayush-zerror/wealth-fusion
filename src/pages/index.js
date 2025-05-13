
import HowWeIn from '@/components/about/HowWeIn'
import Section5 from '@/components/about/Section5'
import ClientMarquee from '@/components/home/ClientMarquee'
import CompanyMap from '@/components/home/CompanyMap'
import Section1 from '@/components/home/Section1'
import Approach from '@/components/services/Approach'
import Map from '@/components/services/Map'
import Section2 from '@/components/services/Section2'
import Section3 from '@/components/services/Section3'
import React from 'react'

const Home = () => {
  return (
    <>
      <Section1 />
      <ClientMarquee/>
      <Section2 isHome={true}/>
      <HowWeIn/>
      <Approach/>
      <Section5/>
      <CompanyMap/>
      {/* <Section3/> */}
      <Map/>
    </>
  )
}

export default Home