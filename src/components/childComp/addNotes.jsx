import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <input
          className="input-title"
          type="text"
          placeholder="masukan judul.."
          onChange={this.onTitleChangeEventHandler}
          value={this.state.title}
        />{" "}
        <br />
        <input
          className="input-body"
          type="text"
          placeholder="ketikan notes kamu.."
          onChange={this.onBodyChangeEventHandler}
          value={this.state.body}
        />{" "}
        <br />
        <Button variant="primary" size="sm" type="submit" className="btn-add">
          add notes
        </Button>
      </form>
    );
  }
}

export default AddNotes;
