import React from "react";
import Button from "react-bootstrap/Button";

const ArsipBtn = ({ onArchive, id }) => {
  return (
    <div>
      <Button variant="success" size="sm" onClick={onArchive}>
        Arsipkan
      </Button>{" "}
    </div>
  );
};

export default ArsipBtn;
