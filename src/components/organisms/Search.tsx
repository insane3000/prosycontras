import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";

const SearchSt = styled.form`
  width: 100%;
  height: auto;

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
    grid-template-columns: calc(100% - 6.5rem) 6rem;
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
    .button_search {
      background: #ffffff;
      border-radius: 0.25rem;
      outline: none;
      border-style: none;
      font-family: var(--motiva500);
      font-size: 0.75rem;
      color: #000000;
      transition: 0.1s;

      &:hover {
        transition: 0.1s;
        background: #d3d3d3;
      }
    }
  }
`;
interface props {
  search: string;
  setSearch: (key: string) => void;
  fetchStreamingText: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsStreaming: (value: boolean) => void;
}
export default function Search(props: props) {
  return (
    <SearchSt onSubmit={(e) => props.fetchStreamingText(e)}>
      <p className="title">Pros y contras de:</p>
      <div className="search_container">
        <div className="container_icon_input">
          <FiSearch className="seach_icon" />
          <input
            className="seach_input"
            type="text"
            name="search"
            value={props.search}
            onChange={(e) => props.setSearch(e.currentTarget.value)}
            placeholder="Ser un hombre..."
            onFocus={(e) => e.currentTarget.select()}
            //     required
          />
        </div>

        <button className="button_search" type="submit">
          Buscar
        </button>
      </div>
    </SearchSt>
  );
}
