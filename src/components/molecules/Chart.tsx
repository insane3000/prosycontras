import "./Chart.css";

import React from "react";

interface props {
  data: any;

}
export default function Chart(props: props) {
  return (
    <div className="chart">
      <div className="chart_gradient"></div>
      <div className="bar_grid">
        {props.data?.map((i: any, index: number) => (
          <div className="bar" key={index}>
            <div
              className={`percentage ${i.type === "pro" ? "radiant_bg" : "dire_bg"}`}
              style={{
                height: `${i.importance}%`,
              }}
            >
              <img className="hero_icon" src={``} alt="" />
              <p className="hero_label">{}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
