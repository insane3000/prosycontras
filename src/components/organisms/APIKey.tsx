import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { LuKey } from "react-icons/lu";
import styled from "styled-components";

const APIKeySt = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  .title {
    font-family: var(--motiva700);
    font-size: 0.9rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  .search_container {
    width: 100%;
    height: 2rem;
    /* margin-bottom: 1rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2rem;
    gap: 0.5rem;
    margin-bottom: 1rem;
    .container_icon_input {
      background: #0a0a0a;
      border: 1px solid #2c2c2c;
      border-radius: 0.25rem;
      display: grid;
      grid-template-columns: 2.5rem calc(100% - 2.5rem);
      grid-template-rows: 100%;
      .seach_icon {
        width: 1rem;
        height: 1rem;
        justify-self: center;
        align-self: center;
        color: #9e9e9e;
      }
      .seach_input {
        font-family: var(--motiva400);
        font-size: 0.75rem;
        color: #ffffff;
        background: none;
        border-style: none;
        outline: none;
      }
      ::placeholder {
        color: #9e9e9e;
        opacity: 1; /* Firefox */
      }

      ::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: #9e9e9e;
      }
    }
    .box_select {
      width: 100%;
      height: 100%;
      background: #0a0a0a;
      border: 1px solid #2c2c2c;
      border-radius: 0.25rem;
      color: #ececec;
      font-family: var(--motiva400);
      font-size: 0.75rem;
      padding: 0 1rem;
      outline: none;

      // !HIDE UGLY ARROW
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url("/BottomArrowIcon.png");
      background-repeat: no-repeat;
      background-position: calc(100% - 0.8rem) center;
      background-size: 0.8rem;
      .box_option {
        color: #ececec;
        font-family: var(--motiva400);
        font-size: 0.75rem;
      }
    }
  }
`;
interface props {
  apiKey: string;
  setApiKey: (key: string) => void;
  modelInput: string;
  setModelInput: (model: string) => void;
}
export default function APIKey(props: props) {
  return (
    <APIKeySt>
      <div className="search_container">
        <div className="container_icon_input">
          <LuKey className="seach_icon" />
          <input
            className="seach_input"
            type="password"
            name="apikey"
            value={props.apiKey}
            onChange={(e) => props.setApiKey(e.currentTarget.value)}
            placeholder="Perplexity API Key"
            onFocus={(e) => e.currentTarget.select()}
            //       required
          />
        </div>
        <select
          className="box_select"
          name="Available"
          value={props.modelInput}
          onChange={(e) => props.setModelInput(e.currentTarget.value)}
          required
        >
          <option className="box_option" value="llama-3-sonar-small-32k-chat">
            llama-3-sonar-small-32k-chat
          </option>
          <option className="box_option" value="llama-3-sonar-large-32k-chat">
            llama-3-sonar-large-32k-chat
          </option>
        </select>
      </div>
    </APIKeySt>
  );
}
