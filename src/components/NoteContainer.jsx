import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./SideBar";
import Content from "./Content";
import Header from "./Header";
import NavBar from "./NavBar";

class NoteContainer extends Component {
  state = {
    notes: [],
    addednote: {},
    clicked: false,
    foundNotes: [],
    userState: {
      id: [],
      name: [],
    },
  };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    const token = localStorage.token;
    fetch("https://notebackendapi.herokuapp.com/notes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((notes) => {
        this.setState({
          notes: notes,
          foundNotes: notes,
        });
      });
    // .catch(error => alert(error))
  };

  handleClick = (notes) => {
    this.setState({
      addednote: notes,
    });
  };

  handleEditButton = (note) => {
    this.setState({
      clicked: true,
    });
  };

  changeNote = (e) => {
    e.persist();
    this.setState((prevState) => ({
      addednote: {
        ...prevState.addednote,
        [e.target.name]: e.target.value,
      },
    }));
  };

  submitHandler = (note, e) => {
    const token = localStorage.token;
    e.preventDefault();
    fetch(`https://notebackendapi.herokuapp.com/notes/${note.notecontent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: note.notecontent.title,
        body: note.notecontent.body,
        user_id: note.notecontent.user_id,
      }),
    })
      .then((response) => console.log(response))
      .then((freshNote) => {
        this.setState((prevState) => {
          return {
            foundNotes: prevState.foundNotes.map((oldNote) =>
              oldNote.id === freshNote.id ? freshNote : oldNote
            ),
            clicked: false,
          };
        });
      });
  };

  handleCancel = () => {
    this.setState({
      clicked: false,
    });
  };

  handleNew = (e) => {
    const token = localStorage.token;

    e.persist();
    fetch("https://notebackendapi.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "Default",
        body: "Default",
        user_id: this.props.user.id,
      }),
    })
      .then((response) => response.json())
      .then((newNote) =>
        this.setState((prevState) => {
          // console.log([...prevState.foundNotes]);
          return { foundNotes: [...prevState.foundNotes, newNote] };
        })
      );
  };

  handleSearch = (e) => {
    e.persist();
    var newArr = [];
    for (let i = 0; i < this.state.notes.length; i++) {
      let note = this.state.notes[i].title;
      let noteBody = this.state.notes[i].body;

      let searchNote = this.state.notes[i];

      if (note.includes(e.target.value)) {
        newArr.push(searchNote);
      } else if (noteBody.includes(e.target.value)) {
        newArr.push(searchNote);
      }
    }
    this.setState({
      foundNotes: newArr,
    });
  };

  handleDelete = (props) => {
    const token = localStorage.token;

    fetch(
      `https://notebackendapi.herokuapp.com/notes/${props.notecontent.id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then(() =>
      this.setState((prevState) => {
        let minusNotes = [...prevState.foundNotes].filter(
          (note) => note.id !== props.notecontent.id
        );
        return { foundNotes: minusNotes, addednote: {} };
      })
    );
  };

  render() {
    return (
      <Fragment>
        <NavBar handleLogout={this.props.handleLogout} />
        <Header user={this.props.user} />

        <Search handleSearch={this.handleSearch} notes={this.state.notes} />
        <div className="container">
          <Sidebar
            handleClick={this.handleClick}
            foundNotes={this.state.foundNotes}
            handleCancel={this.handleCancel}
            handleNew={this.handleNew}
            // user={this.props.user}
          />
          <Content
            notecontent={this.state.addednote}
            handleEditButton={this.handleEditButton}
            clicked={this.state.clicked}
            changeNote={this.changeNote}
            submitHandler={this.submitHandler}
            handleCancel={this.handleCancel}
            handleDelete={this.handleDelete}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
