import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <ButtonCustome onClick={onClick}>{text}</ButtonCustome>;
};

export default Button;

const ButtonCustome = styled.button`
  background: blue;
  font-weight: 400;
  text-align: center;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
`;
