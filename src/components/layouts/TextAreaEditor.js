import React, { useState } from "react";
import ReactQuill from "react-quill";

const TextAreaEditor = () => {
  const handleChange = value => {
    setValue(value);
    console.log(value);
  };
  const [value, setValue] = useState("");
  return <ReactQuill value={value} onChange={handleChange} />;
};

export default TextAreaEditor;
