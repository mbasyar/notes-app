import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import NoteTitle from "../childComp/noteTitle";
import NoteBody from "../childComp/noteBody";
import NoteDate from "../childComp/noteDate";
import DeleteBtn from "../childComp/button/deleteBtn";
import ArsipBtn from "../childComp/button/arsipBtn";

const NoteItem = ({ createdAt, title, body, onDelete, onArchive, id }) => {
  return (
    <div>
      <CardGroup>
        <Card className="card-container">
          <Card.Body>
            <Card.Title className="card_title">
              {" "}
              <NoteTitle title={title} />{" "}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted card_date">
              <NoteDate createdAt={createdAt} />
            </Card.Subtitle>
            <Card.Text className="card_body">
              <NoteBody body={body} />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="card_tombol">
              <DeleteBtn onDelete={onDelete} id={id} />{" "}
              <ArsipBtn onArchive={onArchive} id={id} />
            </div>{" "}
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default NoteItem;
