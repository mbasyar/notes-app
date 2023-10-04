import React from "react";
import Button from "react-bootstrap/Button";

const PindahBtn = ({ onMove, id }) => {
  return (
    <div>
      <Button variant="success" size="sm" onClick={() => onMove(id)}>
        Pindahkan
      </Button>{" "}
    </div>
  );
};

export default PindahBtn;
