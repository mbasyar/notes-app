import React from "react";
import NoteItem from "./noteItem";

function NoteList({ dataNote, onDelete, onArchive }) {
  return (
    <div className="list-card-notes">
      {dataNote.map((dataNotes) => (
        <NoteItem
          key={dataNotes.id}
          id={dataNotes.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...dataNotes}
        />
      ))}
    </div>
  );
}

export default NoteList;
