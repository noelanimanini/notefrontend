import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  // state = {
  //   cancelEdit: true
  // }

  // handleCancelEdit = () => {

  //   this.setState({
  //     cancelEdit: false
  //   })
  // }

  renderContent = () => {
    if (this.props.clicked === true) {
      return (
        <NoteEditor
          notecontent={this.props.notecontent}
          changeNote={this.props.changeNote}
          submitHandler={this.props.submitHandler}
          handleCancel={this.props.handleCancel}
        />
      );
    } else if (this.props.notecontent.body) {
      return (
        <NoteViewer
          notecontent={this.props.notecontent}
          handleEditButton={this.props.handleEditButton}
          clicked={this.props.clicked}
          handleDelete={this.props.handleDelete}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
