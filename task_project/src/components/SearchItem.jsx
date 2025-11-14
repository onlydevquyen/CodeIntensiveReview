import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";

function SearchItem() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchCustome placeholder="Search Items" />
    </SearchWrapper>
  );
}

export default SearchItem;

const SearchWrapper = styled.div`
  border: 1px solid #e6ecf0;
  border-radius: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center
`;

const SearchCustome = styled.input`
  padding: 10px;
  width: 318px;
  border: none;
`;
