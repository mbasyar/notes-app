import React from "react";
import Button from "react-bootstrap/Button";

const DeleteBtn = ({ onDelete, id }) => {
  return (
    <div>
      <Button variant="danger" size="sm" onClick={() => onDelete(id)}>
        Hapus
      </Button>{" "}
    </div>
  );
};

export default DeleteBtn;
