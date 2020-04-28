import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Danny Byrne</h1>
        <div className="NavContainer">
          <div className="NavButton col1" >Software Developer</div>
          <div className="NavButton col2" >Writer</div>
          <div className="NavButton col3" >Musician</div>
        </div>
        <div className="WebBox">
        <object type="text/html" data="http://www.hookd.dev">
        </object>
        </div>
    </div>
  );
}

export default App;
