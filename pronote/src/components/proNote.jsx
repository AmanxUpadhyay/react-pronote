import React from "react";
import "./proNote.css";

function Editor(props) {
  /*
   * Destructor for Previous Data
   */
  const [state, setState] = React.useState("");

  function handleChange(Handle) {
    setState(Handle.target.value);
  }

  return (
    <div className="container">
      <div className="input">
        <h3>Input</h3>
        <textarea className="input-text" onChange={handleChange} />
      </div>
      <div className="output">
        <h3>ProNote Max+</h3>
        <div className="output-text">{state}</div>
      </div>
    </div>
  );
}

export default Editor;
