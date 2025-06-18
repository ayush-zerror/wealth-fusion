import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section2 = ({ data, activeFilter, handleFilterClick, filters }) => {
  return (
    <div id="insight-section2">
      <div className="filters">
        {filters.map((filter) => (
          <div
            className="options"
            key={filter}
            onClick={() => handleFilterClick(filter)}
          >
            <span className={activeFilter === filter ? "active" : ""}>
              {filter}
            </span>
          </div>
        ))}
      </div>
      <div className="product-container">
        {data.map((insight, index) => (
          <Link
            href={`/insights/${insight?.slug}`}
            key={index}
            className="service-card"
          >
            <div className="img-container">
              <Image
                width={1000}
                height={1000}
                src={insight?.thumbnail}
                alt={insight?.title}
              />
            </div>
            <div className="desc-service">
              <div className="card-text-wrap">
                <h4>{insight?.title.substring(0, 39)}...</h4>
                <p>
                  {(() => {
                    const first = insight?.blocks[0]?.content || "";
                    const second = insight?.blocks[1]?.content || "";
                    const combined =
                      first + (first && second ? " " : "") + second;
                    const trimmed = combined.substring(0, 105);
                    return trimmed + (combined.length > 105 ? "..." : "");
                  })()}
                </p>
              </div>
              <span>Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section2;
