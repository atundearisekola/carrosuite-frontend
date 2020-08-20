import React from "react";

const Bagde = ({ type, event, side, content }) => {
  return (
    <span className={`badge badge bagde-${type} badge-${event} float-${side}`}>
      {content}
    </span>
  );
};

export default Bagde;
