import React from "react";

const NoteDate = ({ createdAt }) => {
  return (
    <div>
      {" "}
      <p>{createdAt}</p>
    </div>
  );
};

export default NoteDate;
