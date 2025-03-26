import HowWeIn from '@/components/about/HowWeIn'
import Section1 from '@/components/about/Section1'
import Section2 from '@/components/about/Section2'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Map from '@/components/services/Map'
import React from 'react'

const About = () => {
  return (
    <>
      <Section1 />
      <Section2/>
      <HowWeIn/>
      <Section4/>
      <Section5/>
      <Section3/>
      <Map/>
    </>
  )
}

export default About