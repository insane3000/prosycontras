import { extractJSON } from "@/libs/extractJSON";
import React from "react";
import Spinner from "../atoms/Spinner";
import styled from "styled-components";

const ChartSt = styled.div`
  width: 100%;
  height: 20rem;
  background: #0a0a0a;
  border: 1px solid #2c2c2c;
  border-radius: 0.5rem;
  /* margin-bottom: 2rem; */
  position: relative;
  display: flex;
  overflow: hidden;
  background-image: linear-gradient(#171717 1px, transparent 0.1rem),
    linear-gradient(90deg, #171717 1px, transparent 0.1rem);
  background-size: 1.53rem 1.53rem;
  background-position: bottom;

  .chart_gradient {
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    background: radial-gradient(circle, #0a0a0a00 0%, #0a0a0a 100%);
  }
  .bar_grid {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    padding: 4rem 0rem 2rem 0rem;
  }
  .bar {
    width: 0.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }

  .percentage {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .radiant_bg {
    background: rgb(0, 116, 116);
    background: linear-gradient(0deg, rgb(0, 116, 104) 0%, rgb(0, 255, 195) 100%);
  }
  .dire_bg {
    background: rgb(116, 0, 39);
    background: linear-gradient(0deg, rgb(116, 0, 33) 0%, rgb(255, 0, 85) 100%);
  }
  .hero_icon {
    width: 6rem;
    height: auto;
    line-height: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: -3rem;
    background: #0a0a0a96;
    border: 1px solid #2c2c2c;
    font-family: var(--motiva400);
    font-size: 0.7rem;
    color: #9d9d9d;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s;
    @media only screen and (max-width: 600px) {
      width: 4rem;
    }
    &:hover {
      z-index: 1;
      transition: 0.5s;
      cursor: default;
      width: 6rem;
      height: auto;
      background: #ffffff;
      border: 1px solid #ffffff;
      color: #000000;
    }
  }
  .hero_label {
    font-family: var(--motiva400);
    font-size: 0.7rem;
    color: #adadad;
  }
`;

interface props {
  response: any;
  isStreaming: boolean;
}
export default function Chart(props: props) {
  const data = extractJSON(props.response);

  if (props.isStreaming) {
    return (
      <ChartSt>
        <Spinner />
      </ChartSt>
    );
  }
  return (
    <ChartSt>
      <div className="chart_gradient"></div>
      {!props.isStreaming && (
        <div className="bar_grid">
          {data.map((i: any, index: number) => (
            <div className="bar" key={index}>
              <div
                className={`percentage ${i.type === "pro" ? "radiant_bg" : "dire_bg"}`}
                style={{
                  height: `${i.importance}%`,
                }}
              >
                {/* <img className="hero_icon" src={``} alt="" /> */}
                <div className="hero_icon">{i.description}</div>
                {/* <p className="hero_label">{i.importance}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </ChartSt>
  );
}
