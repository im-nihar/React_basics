import React from "react";

const MyPragraph = (props) => {
  console.log("MyPragraph!");
  return <div>{props.children}</div>;
};

export default MyPragraph;
