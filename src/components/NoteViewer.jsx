import React, { Fragment } from "react";

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.notecontent.title}</h2>
      <p>{props.notecontent.body}</p>
      <button onClick={() => props.handleEditButton(props.notecontent)}>
        Edit
      </button>
      <button type="button" onClick={() => props.handleDelete(props)}>
        Delete
      </button>
    </Fragment>
  );
};

export default NoteViewer;
