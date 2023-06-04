import * as React from "react"

const CenterWrapper = ({ children }) => {
  return (
    <span style={{"height": "100%", "verticalAlign": "sub"}}>
      {children}
    </span>
  );
};

export default CenterWrapper;