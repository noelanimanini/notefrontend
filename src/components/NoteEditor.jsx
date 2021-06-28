import React, { Component } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { button } from "@material-ui/icons/FavoriteBorder";

class NoteEditor extends Component {
  // state = {

  //     title: 'title',
  //     body: 'body'

  // }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }

  // cancelFormEdits = (e, editedNote) => {
  //   e.preventDefault()
  //   console.log(editedNote)
  //   debugger
  //   fetch(`http://localhost:3000/api/v1/notes/${editedNote.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       'Content-Type' : 'application/json',
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       title: editedNote.title,
  //       body: editedNote.body,
  //       user_id: editedNote.user.id
  //     })
  //   }).then(response => response.json())
  //   .then( (freshNote) => {
  //       this.setState((prevState) => {
  //         return {foundNotes: prevState.foundNotes.map( oldNote => oldNote.id === freshNote.id ? freshNote : oldNote)}
  //       })
  //   } )
  // }

  render() {
    return (
      <div>
        <form
          className="note-editor"
          onSubmit={(e) => this.props.submitHandler(this.props, e)}
        >
          <input
            type="text"
            name="title"
            value={this.props.notecontent.title}
            onChange={this.props.changeNote}
          />
          <textarea
            name="body"
            value={this.props.notecontent.body}
            onChange={this.props.changeNote}
          />
          <div className="button-row">
            <input className="button" type="submit" value="save" />
            <button type="button" onClick={() => this.props.handleCancel()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteEditor;
