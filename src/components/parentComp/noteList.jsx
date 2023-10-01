import React from "react";
import NoteItem from "./noteItem";

function NoteList({ dataNote, onDelete }) {
  return (
    <div className="list-notes">
      {dataNote.map((dataNotes) => (
        <NoteItem
          key={dataNotes.id}
          id={dataNotes.id}
          onDelete={onDelete}
          {...dataNotes}
        />
      ))}
    </div>
  );
}

export default NoteList;
