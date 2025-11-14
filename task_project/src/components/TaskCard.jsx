import React from "react";
import AssignName from "./AssignName";
import FlagIcon from "../assets/icons/FlagIcon";
import ClockIcon from "../assets/icons/ClockIcon";
import EditIcon from "../assets/icons/EditIcon";
import AttachmentIcon from "../assets/icons/AttachmentIcon";
import styled from "styled-components";
function TaskCard({ task }) {
  const { taskId, title, description, flagId, assignedTo, deadline, totalAttachments } = task;

  const deadlineDate = new Date(deadline).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Card key={taskId}>
      <div className="card-header">
        <div className="card-content">
          <span className="title">{title}</span>
          <EditIcon />
        </div>
        <div className="description">{description}</div>
        <AssignName assignedTo={assignedTo}/>
      </div>
      <div className="card-footer">
        <div className="footer-box">
          <AttachmentIcon disabled={totalAttachments > 0} />
          <span>{totalAttachments || null}</span>
        </div>
        <FlagIcon flagId={flagId} />
        <div className="footer-box">
          <ClockIcon />
          <span>{deadlineDate}</span>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;

const Card = styled.div`
  color: black;
  background: white;
  border-radius: 5px;
  min-width: 287px;
  max-width: 360px;
  min-height: 192px;
  box-shadow: 0px 1px 2px 0px #00000026;
  .card-header {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 500;
      font-size: 15px;
    }
  }
  .description {
    text-align: left;
  }

  .card-footer {
    padding: 8px 12px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e6ecf0;
    .footer-box {
      display: flex;
      gap: 6px;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
