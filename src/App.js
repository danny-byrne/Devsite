import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Danny Byrne</h1>
        <div className="NavContainer">
          <div className="NavButton col1">Software Developer</div>
          <div className="NavButton col2">Writer</div>
          <div className="NavButton col3">Musician</div>
        </div>
        <div className="SampleBox">
          <object className="Sample" type="text/html" data="http://www.hookd.dev">
          </object>
          Hookd is a web-app, npm module, and CLI tool for transforming React components. 
          It was developed using Babel, Typescript, and React. 
        </div>
    </div>
  );
}

export default App;
