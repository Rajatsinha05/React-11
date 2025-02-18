import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({
  title,
  desc,
  endDate,
  assignTo,
  assignedBy,
  createdAt,
  status,
  role,
  _id
}) => {

  const nav = useNavigate()

  return (
    <div onClick={() => nav(`/task-details/${_id}`)}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{status}</p>

      <p>
        createdAt:{" "}
        {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p>
        endDate:{" "}
        {new Date(endDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {role == "user" ? <p>{assignedBy?.name}</p> : <p>{assignTo?.name}</p>}
    </div>
  );
};

export default TaskCard;
