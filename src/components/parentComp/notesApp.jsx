import React, { Component } from "react";
import { getInitialData } from "../../utils";
import NoteList from "./noteList";
import AddNotes from "../childComp/addNotes";

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
      <>
        <h5>tambah catatan</h5>
        <AddNotes addNote={this.onAddHandler} />
        <h1>daftar catatan</h1>
        <div className="notes-app">
          <NoteList
            dataNote={this.state.dataNote}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </>
    );
  }
}
