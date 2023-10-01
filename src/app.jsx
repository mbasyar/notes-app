import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import NotesApp from "./components/parentComp/notesApp";

const App = () => {
  return (
    <div className="container-app">
      <NotesApp />
    </div>
  );
};

export default App;
