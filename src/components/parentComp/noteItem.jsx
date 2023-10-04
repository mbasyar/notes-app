import React from "react";
import Card from "react-bootstrap/Card";
import NoteTitle from "../childComp/noteTitle";
import NoteBody from "../childComp/noteBody";
import NoteDate from "../childComp/noteDate";
import DeleteBtn from "../childComp/deleteBtn";
import ArsipBtn from "../childComp/arsipBtn";

const NoteItem = ({ createdAt, title, body, onDelete, onArchive, id }) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Card.Title>
            {" "}
            <NoteTitle title={title} />{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <NoteDate createdAt={createdAt} />
          </Card.Subtitle>
          <Card.Text>
            <NoteBody body={body} />
          </Card.Text>
          <div className="tombol">
            <Card.Link href="#">
              <DeleteBtn onDelete={onDelete} id={id} />{" "}
            </Card.Link>
            <Card.Link href="#">
              <ArsipBtn onArchive={onArchive} id={id} />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
