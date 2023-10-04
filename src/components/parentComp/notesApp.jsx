import React, { Component } from "react";
import { getInitialData } from "../../utils";
import NoteList from "./noteList";
import AddNotes from "../childComp/addNotes";
import ShowArchive from "../childComp/showArcive"; // Perbaiki penamaan komponen

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNote: getInitialData(),
      archivedNotes: [],
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
  }

  toggleArchive = (id) => {
    const { dataNote, archivedNotes } = this.state;
    const updatedDataNote = dataNote.filter((note) => note.id !== id);
    const archivedNote = dataNote.find((note) => note.id === id);

    if (archivedNote) {
      this.setState({
        dataNote: updatedDataNote,
        archivedNotes: [...archivedNotes, archivedNote],
      });
    }
  };

  onDeleteHandler(id) {
    const dataNote = this.state.dataNote.filter((note) => note.id !== id);
    this.setState({ dataNote });
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        dataNote: [
          ...prevState.dataNote,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleString(),
          },
        ],
      };
    });
    alert("note baru telah ditambahkan");
  }

  render() {
    const { dataNote, archivedNotes } = this.state;

    return (
      <div className="root-container">
        {/* input new notes */}
        <div className="add-notes">
          <h5>Buat Catatan</h5>
          <AddNotes addNote={this.onAddHandler} />
        </div>
        {/* list notes */}
        <div className="daftar-notes">
          <h5>daftar catatan</h5>
          <div className="notes-app">
            {dataNote.length === 0 ? (
              <h5 className="notes-notfound">Catatan Kosong</h5>
            ) : (
              <NoteList
                dataNote={dataNote}
                onDelete={this.onDeleteHandler}
                onArchive={this.toggleArchive}
              />
            )}
          </div>
          <div className="archive-notes">
            <h5>arsip catatan</h5>
            <ShowArchive archivedNotes={archivedNotes} />
          </div>
        </div>
      </div>
    );
  }
}
