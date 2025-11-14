import React from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import MoreIcon from "../assets/icons/MoreIcon";
import PlushIcon from "../assets/icons/PlushIcon";
import { tasks, taskStatus } from "../data/data";
function TaskList({ status }) {
  const data = tasks.filter(task => task.statusId === status );
  const titleList = taskStatus.find(item  => item.statusId === status)
  return (
    <List>
      <div className="list-header">
        <div className="flex-horizontal-center">
          <span className="title">{titleList?.name}</span>
          <button className="action-button">{data?.length}</button>
        </div>

        <div className="flex-horizontal-center">
          <button className="action-button">
            <PlushIcon />
          </button>
          <button className="action-button">
            <MoreIcon />
          </button>
        </div>
      </div>

      <div className="list-content">
        {data.map(task => {
          return <TaskCard key={task.taskId} task={task} />;
        })}
      </div>
    </List>
  );
}

export default TaskList;

const List = styled.div`
  background: #e6ecf0;
  border-radius: 5px 5px 0 0;
  min-height: 85vh;
  .flex-horizontal-center {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .list-header {
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 700;
      font-size: 15px;
    }
    .action-button {
      border-radius: 100%;
      height: 30px;
      width: 30px;
      background: #d5d5d5;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .list-content {
    padding: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
