import React from "react";
import styled from "styled-components";
const LogsSt = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  //   margin-top: 1rem;
  .title {
    font-family: var(--motiva400);
    font-size: 0.8rem;
    color: #c7c7c7;
    margin-bottom: 0.5rem;
  }
  .logs {
    width: 100%;
    height: 10rem;

    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border: 1px solid #2c2c2c;
    border-radius: 0.5rem;
    background: rgb(10, 10, 10);
    font-size: 16px;
   resize: vertical;
    outline: none;
    color: rgb(190, 190, 190);

    // !Scroll style
    scrollbar-color: #4d4d4d69 transparent;
    scrollbar-width: thin;
  }
`;
interface props {
  response: string;
  textAreaRef: any;
}
export default function Logs(props: props) {
  return (
    <LogsSt className={"logs_container"}>
      <p className={"title"}>Logs</p>
      <textarea className={"logs"} value={props.response} readOnly ref={props.textAreaRef}></textarea>
    </LogsSt>
  );
}
