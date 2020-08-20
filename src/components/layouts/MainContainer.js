import React from "react";
import Table from "./Table";

export default function MainContainer({ collapsed }) {
  return (
    <div
      className="mainContainer"
      style={
        collapsed === true
          ? { backgroundColor: "white", width: "90%", marginLeft: "10%" }
          : { backgroundColor: "white" }
      }
    ></div>
  );
}
