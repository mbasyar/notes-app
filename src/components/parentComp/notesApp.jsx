import React, { Component } from "react";
import { getInitialData } from "../../utils";
import NoteList from "./noteList";
import AddNotes from "../childComp/addNotes";
import NavLogo from "../childComp/navbar";

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNote: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
  }
  onDeleteHandler(id) {
    const dataNote = this.state.dataNote.filter((note) => note.id !== id);
    this.setState({ dataNote });
    alert("delete success");
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
          },
        ],
      };
    });
    alert("note baru telah ditambahkan");
  }
  render() {
    return (
      <div className="root-container">
        <NavLogo />
        <div className="add-notes">
          <h5>Buat Catatan</h5>
          <AddNotes addNote={this.onAddHandler} />
        </div>
        <div className="daftar-notes">
          <h5>daftar catatan</h5>
          <div className="notes-app">
            <NoteList
              dataNote={this.state.dataNote}
              onDelete={this.onDeleteHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}
