import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    </div>
  );
};

export default Spinner;
