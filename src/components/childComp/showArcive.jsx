import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import NoteTitle from "../childComp/noteTitle";
import NoteBody from "../childComp/noteBody";
import NoteDate from "../childComp/noteDate";
import DeleteBtn from "./button/deleteBtn";
// import ArsipBtn from "../childComp/arsipBtn";

class ShowArchive extends Component {
  render() {
    const { archivedNotes } = this.props;

    return (
      <div className="cont-archive">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <div className="card-archived">
              <Card className="card-archive" key={note.id}>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <NoteTitle title={note.title} />{" "}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <NoteDate createdAt={note.createdAt} />
                  </Card.Subtitle>
                  <Card.Text>
                    <NoteBody body={note.body} />
                  </Card.Text>
                  <div className="tombol">
                    <Card.Link href="#">
                      <DeleteBtn />{" "}
                    </Card.Link>
                    <Card.Link href="#">
                      <ArsipBtn />
                    </Card.Link>
                  </div>

                  {/* <Card.Link href="#">
                      <ArsipBtn onArchive={note.onArchive} id={id} />
                    </Card.Link> */}
                  <Card.Link href="#">
                    <p>Catatan ini telah di Arsipkan</p>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h5 className="archive-notfoun">Arsip Kosong</h5>
        )}
      </div>
    );
  }
}
export default ShowArchive;
