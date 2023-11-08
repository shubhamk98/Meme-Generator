import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./Homepage.css";
import Text from "../Components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
  const [count, setCount] = useState(0);
  const [params] = useSearchParams();
  const memeref = createRef();
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div  className="cards">
      <div ref={memeref}>
        <img src={params.get("url")} alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <button className="addtext" onClick={addText}>Add text</button>
      <button
        className="success"
        onClick={(e) => exportComponentAsJPEG(memeref)}>
        Save
      </button>
    </div>
  );
};

export default Edit;
