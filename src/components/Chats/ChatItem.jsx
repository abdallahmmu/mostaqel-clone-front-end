import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const ProjectInfo = ({ chat }) => {
  const { projectId, freelancerId, clientId, createdAt, _id } = chat;
  return (
    <>
      <div className="bg-white p-4 mb-2">
        <h3>
          <Link to={`/chats/${_id}`}>{projectId.title}</Link>
        </h3>
        <p>
          {freelancerId.firstName} {freelancerId.lastName}{" "}
          <span className="opacity-50">
            {moment(new Date(createdAt)).fromNow()}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProjectInfo;
