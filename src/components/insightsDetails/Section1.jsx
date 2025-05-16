import { RenderContentBlock } from "@/utils/RenderContentBlock";
import React from "react";

const Section1 = ({ insight }) => {
  return (
    <>
      <div id="details-ig1">
        <h1>{insight?.title}</h1>
        <span>January 18, 2025 by Liam McCann</span>
        <img src={insight?.thumbnail} alt={insight?.title} />
        {insight.blocks.map((block, index) => RenderContentBlock(block, index))}
      </div>
    </>
  );
};

export default Section1;
