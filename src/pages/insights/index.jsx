import Section1 from "@/components/insights/Section1";
import Section2 from "@/components/insights/Section2";
import { InsightData } from "@/helpers/InsightData";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Insights = ({ data }) => {
  const router = useRouter();
  const { filterby } = router.query;

  const filters = ["all", "coverage", "archive"];
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filter = filterby && filters.includes(filterby) ? filterby : "all";
    setActiveFilter(filter);

    if (filter === "all") {
      setFilteredData(data);
    } else {
      const newData = data.filter((item) =>
        item.category?.some((c) => c.toLowerCase() === filter)
      );
      setFilteredData(newData);
    }
  }, [filterby, data]);

  const handleFilterClick = (filter) => {
    router.push(`?filterby=${filter}`, undefined, { shallow: true });
  };

  return (
    <>
      <Section1 />
      <Section2
        data={filteredData}
        activeFilter={activeFilter}
        filters={filters}
        handleFilterClick={handleFilterClick}
      />
    </>
  );
};

export default Insights;

// Runs at build time
export async function getStaticProps() {
  return {
    props: {
      data: InsightData, // send full data
    },
  };
}
