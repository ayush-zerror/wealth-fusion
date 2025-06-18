import { RenderContentBlock } from "@/utils/RenderContentBlock";
import React, { Fragment } from "react";

const Section1 = ({ insight }) => {
  return (
    <>
      <div id="details-ig1">
        <h1>{insight?.title}</h1>
        <span>May 02, 2025</span>
        <img src={insight?.thumbnail} alt={insight?.title} />
        <div id="block-container">
          {insight.blocks.map((block, index) =>
           <Fragment key={index}>
             {RenderContentBlock(block, index)}
           </Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default Section1;
