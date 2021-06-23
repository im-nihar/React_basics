import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/DemoOutput/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app running!");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const alllowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      {/* React memo works for DemoOutput is because false is a boolean value, and imperative value. */}
      {/*For javascript:  false===false // true */}
      {/* [1,2,3]===[1,2,3] //false */}
      <Button onClick={alllowToggleHandler}>Allow Toggle Button</Button>
      {/* Button runs again because props.onCick===props.previous.onClick is not true because 
      functions are objects and no two objects are same as compared like this.
      Hence, react.memo(Button) finds value is changed and runs everytime.
      */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

//LINK difference between reference and primitive values: https://academind.com/tutorials/reference-vs-primitive-values/

// If we add React.memo(Button); it still displays.
// This is because, App.js is a function, it reExcecutes again, if the state changes.
// Hence everything executes again, again creating a new function, displaying button running in console.

// useCallback() hook to prevent function recreation.
// Now toggleParagraphHandler will always be the same in memory, and will not create a new function on reload.
// hence React.memo(Button) will only run once.
// now all the prop values are comparable, and hence it will run only once at the beginning.
// toggleParagraphHandler will always be same in the memory.

// let obj1={}
// let obj2={}
// obj1===obj2
// false
// obj2=obj1
// {}
// obj1===obj2
// true
