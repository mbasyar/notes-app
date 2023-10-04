import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      remainingCharacters: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    const remainingCharacters = 50 - newTitle.length;
    if (remainingCharacters >= 0) {
      this.setState({
        title: newTitle,
        remainingCharacters: remainingCharacters,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
  }

  render() {
    return (
      <div className="container-input">
        <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
          <span className="character-count">
            Karakter tersisa: {this.state.remainingCharacters}
          </span>
          <input
            className="input-title"
            type="text"
            placeholder="Masukan Judul"
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
          />
          <br />

          <br />
          <input
            className="input-body"
            type="text"
            placeholder="Ketikkan kata-kata mutiara kamu..."
            onChange={this.onBodyChangeEventHandler}
            value={this.state.body}
          />
          <br />
          <Button variant="primary" size="sm" type="submit" className="btn-add">
            ADD NOTES
          </Button>
        </form>
      </div>
    );
  }
}

export default AddNotes;
