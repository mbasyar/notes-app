import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import NoteTitle from "../childComp/noteTitle";
import NoteBody from "../childComp/noteBody";
import NoteDate from "../childComp/noteDate";
import DeleteBtn from "./button/deleteBtn";
import PindahBtn from "./button/pindahBtn";

class ShowArchive extends Component {
  render() {
    const { archivedNotes, onDelete, onMove } = this.props;

    return (
      <div className="list-card-archive">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <div key={note.id}>
              <CardGroup>
                <Card className="card-container" key={note.id}>
                  <Card.Body>
                    <Card.Title className="card_title">
                      {" "}
                      <NoteTitle title={note.title} />{" "}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted card_date">
                      <NoteDate createdAt={note.createdAt} />
                    </Card.Subtitle>
                    <Card.Text>
                      <NoteBody body={note.body} />
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="card_tombol">
                      <DeleteBtn onDelete={() => onDelete(note.id)} />

                      <PindahBtn onMove={() => onMove(note.id)} />
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          ))
        ) : (
          <h5 className="notes-notfound-title">Arsip Kosong...</h5>
        )}
      </div>
    );
  }
}
export default ShowArchive;
