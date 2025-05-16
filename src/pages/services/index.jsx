import Approach from '@/components/services/Approach'
import Map from '@/components/services/Map'
import Section1 from '@/components/services/Section1'
import Section11 from '@/components/services/Section11'
import Section2 from '@/components/services/Section2'
import Section3 from '@/components/services/Section3'
import { InsightData } from '@/helpers/InsightData'
import React from 'react'

const Services = ({data}) => {
  return (
    <>
      <Section1 />
      <Section11/>
      <Section2/>
      <Approach/>
      <Section3 InsightData={data}/>
      <Map/>
    </>
  )
}

export default Services;

export async function getStaticProps() {
  return {
    props: {
       data: InsightData.slice(0, 4),
    },
  };
}

