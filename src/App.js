import React, {useState} from 'react';
import './App.css';
import * as Constants from "./constants";
// import SocialBadge from 'react-social-badge';

const image = require('./assets/images/Danny1.jpg');

function App() {
  const [view, setView] = useState('about');
  const curView = (view) => { 
    switch (view) {
      case 'about':
         return <About />
      case 'work': 
         return <Work />
      case 'musician':
         return <Musician />
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
        <div className="NavButton" value="musician" onClick={(e) => switchView(e, "musician")}>Creative</div>
      </div>
      <div className="view">{curView(view)}</div>

        
    </div>
  );
}

const About = () => {
  const { skills, text } = Constants;
  const skillList = skills.map(e => {
    const { t, c } = e;
    return (
          <div key={t} className="skill-item">
            <div className="category">{t}:</div>
            <div className="list ">{c}</div>
          </div>
    )
  })

  console.log(skillList)

  return (
    <>
      <div className="about-text">{text}</div>
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="skill-list">
        {skillList}
      </div>
    </>
  )
}

const Work = () => {
  return (
    <div className="SampleBox">
      <iframe className="Sample" type="text/html" src="https://www.hookd.dev/" title="HOOKD"></iframe>
      <a href="www.hookd.dev">Hookd</a> is a web-app, npm module, and CLI tool for transforming React components. 
      It was developed using Babel, Typescript, and React. One particular contribution of mine to this tool was creating an algorithm
      for detecting component structure where ContextAPI was used, and to conditionally modify AST Nodes to inject useContext and other hooks accordingly.
    </div>
  )
}

const Musician = () => {
  return (
    <div>Coming Soon...</div>
  )
}

export default App;
