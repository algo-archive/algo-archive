import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CodeEditor({value}) {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div class="editor">
      <CodeMirror
        value={value}
        height="200px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      {/* <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      /> */}
    </div>
  );
}