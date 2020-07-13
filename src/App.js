import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Creative from './components/Creative';
import Work from './components/Work';



export default function App() {
  const [view, setView] = useState('about');
  const curView = (view) => { 
    switch (view) {
      case 'about':
         return <About />
      case 'work': 
         return <Work />
      case 'creative':
         return <Creative />
      default:
         return <About />
    }
  }

  const switchView = (e, target) => {
    setView(target)
  }

  return (
    <div className="App fade-in">
      <div className="Headline">
        <h1>Danny Byrne</h1>
            <h3>Software Developer</h3>
      </div>
      <div className="NavContainer fade-in" >
        <div className="NavButton" value="about" onClick={(e) => switchView(e, "about")}>About</div>
        <div className="NavButton" value="work" onClick={(e) => switchView(e, "work")}>Work</div>
        <div className="NavButton" value="creative" onClick={(e) => switchView(e, "creative")}>Creative</div>
      </div>
      <div className="view">{curView(view)}</div>
    </div>
  );
}

