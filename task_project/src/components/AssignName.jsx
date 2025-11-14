import React from "react";
import styled from "styled-components";
import { users } from "../data/data";
function AssignName({ assignedTo }) {
  const user = users.find((user) => user.userId == assignedTo);  
  return <AssignNameBox>{user.name}</AssignNameBox>;
}

export default AssignName;

const AssignNameBox = styled.div`
  text-align: center;
  padding: 2px 12px;
  border-radius: 5px;
  background: blue;
  color: white;
  width: max-content;
`;
