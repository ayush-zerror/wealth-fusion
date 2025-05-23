import { RenderContentBlock } from "@/utils/RenderContentBlock";
import React from "react";

const Section1 = ({ insight }) => {
  return (
    <>
      <div id="details-ig1">
        <h1>{insight?.title}</h1>
        <span>May 02, 2025</span>
        <img src={insight?.thumbnail} alt={insight?.title} />
        <div id="block-container">
          {insight.blocks.map((block, index) =>
            RenderContentBlock(block, index)
          )}
        </div>
      </div>
    </>
  );
};

export default Section1;
