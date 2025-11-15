import React, { useState } from "react";
import styled from "styled-components";

const CreateTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({ name: "", id: "" });
  const handleUpdate = () => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <BoxCreate>
      <InputStyled
        placeholder="Enter your task"
        onChange={(e) =>
          setNewTask({ name: e.target.value, id: tasks.length + 1 })
        }
      />
      <button onClick={handleUpdate}>Add</button>
    </BoxCreate>
  );
};

export default CreateTask;

const BoxCreate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`

const InputStyled = styled.input`
  padding: 6px;
  width: 100%;
`;
