import React, {useState} from 'react';
import './App.css';

function App() {
  console.log('app rendered')
  const [view, setView] = useState('about');


  const curView = (view) => { 
    console.log('curView is', view)
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
    // let  value  = e.target.value;
    console.log('switchView clicked:', target)
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
      {/* <Work /> */}

        
    </div>
  );
}

const About = () => {
  console.log('rendering About View');
  let text=`Danny Byrne is a software developer, musician, artist, and technologist across many mediums. 
  He enjoys exploring new ideas, personal transformational practices, and the wild places of the American West.`;

  return (
    <div className="text">{text}</div>
  )
}

const Work = () => {
  console.log('rendering Work View');
  return (
    <div className="SampleBox">
      <object className="Sample" type="text/html" data="http://www.hookd.dev"></object>
      Hookd is a web-app, npm module, and CLI tool for transforming React components. 
      It was developed using Babel, Typescript, and React. My particular role in this developer tool was creating an algorithm
      for detecting component structure where ContextAPI was used, and transform AST Nodes to implement useContext accordingly.
    </div>
  )
}

const Musician = () => {
  console.log('rendering Musician View');
  return (
    <div>Some Music</div>
  )
}

export default App;
