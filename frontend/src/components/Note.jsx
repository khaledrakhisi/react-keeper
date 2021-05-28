import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}><Fab onClick={handleClick}><DeleteForeverIcon /></Fab></Zoom>      
    </div>
  );
}

export default Note;
