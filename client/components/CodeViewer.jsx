import React from 'react';
import { useState, useEffect } from 'react';
import '../style.css';
import './CodeViewer.css';
import CodeEditor from './CodeEditor.jsx'
import Button from './Button.jsx'

// import React, { useState } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";

const CodeViewer = ((props) => {

  const { title, description, solution, comments, setTitle, setDescription, setSolution, setComments, handleClear, handleDeleteClick, handleAddTitle } = props;
  const [output, setOutput] = useState('');

  const executeCode = () => {
    try {
      const result = eval(solution);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
  //Unloaded Blank page
  <form onSubmit={handleAddTitle} className='codeViewer' data-testid="form">
    <label className='title'>
      Challenge Title:
      <input
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    </label>
    <br />

    <label className='question'>
      Challenge Question:
      <textarea
      type='text'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />
    </label>
    <br />

    <label className='solution'>
      Challenge Solution:
      <CodeEditor
        value={solution}
        onChange={setSolution}
      />
    </label>
    <div className='buttons'>
     <button onClick={executeCode}>Run Code</button>
    </div>
    <br/>
    {/* <div>Output: {output}</div> */}
    <label className='output'>
      Output:
      <textarea
      type='text'
      value=''
      // onChange={(e) => setDescription(e.target.value)}
      />
    </label>
    <br/>
    <label className='comments'>
      Comments:
      <textarea
      type='text'
      value={comments}
      onChange={(e) => setComments(e.target.value)}
      />
    </label>
    <br />
    <div className='buttons'>
      <button className="clear" title={title} onClick={handleClear}>Clear</button>
      <button type='submit'>Submit</button>
    </div>
  </form>
  )
}
);

export default CodeViewer;