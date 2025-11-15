import React from "react";
import Task from "./Task";
import styled from "styled-components";

const ListTask = ({ tasks, setTasks }) => {
  console.log(tasks);

  return (
    <ListStyled>
      {tasks.map((task) => {
        return <Task task={task} tasks={tasks} setTasks={setTasks} />;
      })}
    </ListStyled>
  );
};

export default ListTask;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
