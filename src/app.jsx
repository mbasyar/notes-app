import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import NotesApp from "./components/parentComp/notesApp";
import NavLogo from "./components/childComp/navbar";

const App = () => {
  return (
    <div className="container-app">
      <NavLogo />
      <NotesApp />
    </div>
  );
};

export default App;
