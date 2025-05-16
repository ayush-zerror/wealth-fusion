import Section1 from '@/components/insights/Section1'
import Section2 from '@/components/insights/Section2'
import { InsightData } from '@/helpers/InsightData'
// import { InsightsData } from '@/helpers/InsightsData'
import React from 'react'

const Insights = ({data}) => {
  return (
    <>
      <Section1 />
      <Section2 data={data} />
    </>
  )
}

export default Insights;

export async function getStaticProps() {
  return {
    props: {
      data:InsightData,
    },
  };
}