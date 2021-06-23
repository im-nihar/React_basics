import React from "react";
import MyPragraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demooutput!");
  return <MyPragraph>{props.show ? "This is new!" : ""}</MyPragraph>;
};

export default React.memo(DemoOutput);

//using react.memo() stops the use for reEvaluating if there is no change.
// it comes at a performance cost:
// 1. store the previous value.
// 2. Comparision with the new values.

// props.show === props.previos.show
