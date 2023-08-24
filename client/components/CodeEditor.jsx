import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CodeEditor({value, onChange}) {
  const handleEditorChange = React.useCallback((editorValue, viewUpdate) => {
    console.log("value:", editorValue);
    if(onChange) {
        onChange(editorValue);
    }
  }, [onChange]);

  return (
    <div class="editor">
      <CodeMirror
        value={value}
        height="200px"
        theme="light"
        extensions={[javascript({ jsx: true })]}
        onChange={handleEditorChange}
      />
    </div>
  );
}
