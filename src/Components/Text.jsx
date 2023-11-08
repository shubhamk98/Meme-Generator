import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit");

  return (
    <Draggable>
      {editMode ? (
        <input
        type="text"
          autoFocus
          onClick={(e) => setVal(e.target.value)}
          onDoubleClick={(e) => setEditMode(false)}
        />
      ) : (
        <h4 onDoubleClick={(e) => setEditMode(true)}>{val}</h4>
      )}
    </Draggable>
  );
};

export default Text;
