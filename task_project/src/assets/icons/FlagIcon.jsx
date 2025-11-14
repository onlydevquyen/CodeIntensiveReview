import React from "react";
import { flags } from "../../data/data";
import styled from "styled-components";
function FlagIcon({ width = 15, height = 17, flagId = 1 }) {
  const currentFlag = flags.find((flag) => flag.flagId === flagId);
  return (
    <FlagBox title={currentFlag.name}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z"
          fill={currentFlag.color}
        />
      </svg>
    </FlagBox>
  );
}

export default FlagIcon;

const FlagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`