import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "USA", coordinates: [-98.5795, 39.8283] }, // USA (center)
  { name: "UK", coordinates: [-0.1276, 51.5074] }, // UK (London)
  { name: "Africa", coordinates: [31.2357, 30.0444] }, // Africa (center)
  { name: "Switzerland", coordinates: [8.2275, 46.8182] }, // Switzerland
  { name: "Dubai", coordinates: [55.2708, 25.2048] }, // Dubai (UAE)
  { name: "India", coordinates: [78.9629, 20.5937] }, // India (center)
  { name: "Singapore", coordinates: [103.8198, 1.3521] }, // Singapore
];

const WorldMap = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden",userSelect:"none" }}>
      <ComposableMap
        projectionConfig={{ scale: 170 }}
        width={1000}
        height={600}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#EAEAEC", outline: "none" },
                  hover: { fill: "#0A1E37", outline: "none" },
                  pressed: { fill: "#D6D6DA", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates },i) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#0A1E37" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              x={i === 3 ? 30 : 0}
              style={{
                fontFamily: "system-ui",
                fill: "#2D2D2D",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
