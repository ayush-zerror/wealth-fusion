import Section1 from "@/components/insightsDetails/Section1";
import Section4 from "@/components/insightsDetails/Section4";
import { InsightData } from "@/helpers/InsightData";
import React from "react";

const InsightDetails = ({ insight, similarInsights }) => {
  return (
    <>
      <Section1 insight={insight} />
      <Section4 similarInsights={similarInsights}/>
    </>
  );
};

export default InsightDetails;

export async function getStaticPaths() {
  const paths = InsightData.map((insight) => ({
    params: { slug: insight.slug },
  }));

  return {
    paths,
    fallback: false, // change to true or 'blocking' if data updates frequently
  };
}

export async function getStaticProps({ params }) {
  const insight = InsightData.find((item) => item.slug === params.slug);

  const similarInsights = InsightData.filter(
    (item) => item.slug !== params.slug && item.category === insight.category
  ).slice(0, 4); // get first 4

  return {
    props: {
      insight,
      similarInsights,
    },
  };
}
