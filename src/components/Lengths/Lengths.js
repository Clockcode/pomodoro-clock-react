import React from "react";

import Length from "./Length/Length";

const Lengths = (props) => {
  let breakStyle = { marginRight: "2rem" };
  if (window.innerWidth < 600) {
    breakStyle = { marginRight: "0" };
  }
  // This is what you see on screen
  return (
    <div className="lengths">
      <Length
        labelId="break-label"
        lengthName="Break"
        decrementId="break-decrement"
        lengthId="break-length"
        incrementId="break-increment"
        style={breakStyle}
      />
      <Length
        labelId="session-label"
        lengthName="Session"
        decrementId="session-decrement"
        lengthId="session-length"
        incrementId="session-increment"
      />
    </div>
  );
};

export default Lengths;
