import React from "react";

const NoteDate = ({ createdAt }) => {
  return (
    <div>
      {" "}
      <p className="date">{createdAt}</p>
    </div>
  );
};

export default NoteDate;
