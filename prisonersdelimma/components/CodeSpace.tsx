/** @format */

import { useEffect, useRef } from "react";
import Panel from "./Panel";
import React from "react";

const CodeSpace: React.FC = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("save component mounted");
    const interval = setInterval(() => {
      //implememnt postgres shit
    }, 100000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Panel styles="">
      <textarea ref={inputRef}>enter your code here</textarea>
      <button>Submit</button>
      <button>Save</button>
      <button>debug</button>
    </Panel>
  );
};

export default CodeSpace;
