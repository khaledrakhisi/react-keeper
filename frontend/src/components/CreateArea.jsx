import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [b_focused, setFocused] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div onBlur={()=>{
      // setFocused(false);
    }}>
      <form className="create-note">
        {b_focused && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onFocus={()=>{
            setFocused(true);
          }}
          
          value={note.content}
          placeholder="Take a note..."
          rows= {!b_focused ? "1" : "3"}
        />
        {b_focused && <Zoom in={true}><Fab onClick={submitNote}><AddBoxIcon/></Fab></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
