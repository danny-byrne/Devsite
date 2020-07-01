import React, {useState} from 'react';
import './App.css';
// import SocialBadge from 'react-social-badge';

const image = require('./assets/images/Danny1.jpg');

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

        
    </div>
  );
}

const About = () => {
  console.log('rendering About View');
  let text=`Danny Byrne is a software developer, technologist, and artist across many mediums. 
  He enjoys exploring new ideas, engaging in practices in personal transformation, and seeking out the wild places of the American West.`;

  const skills = [
   { t: 'Languages',
    c: 'Javascript(ES6+), Typescript,  HTML5/CSS3' },
    { t: 'Front End',
    c: 'React(Hooks), Redux, SASS/SCSS, Webpack, Babel' },
    { t: 'Back End',
    c: 'Node.js, Express.js, RESTful, SQL, NoSQL' },
    { t: 'Miscellaneous',
    c: 'Websockets, TDD, AWS(ES2, Elastik Beanstalk, DynamoDB), CI/CD, OAuth' }
  ]

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
  console.log('rendering Work View');
  return (
    <div className="SampleBox">
      {/* <object className="Sample" type="text/html" data="http://www.hookd.dev"></object> */}
      <iframe className="Sample" type="text/html" data="http://www.hookd.dev"></iframe>
      Hookd is a web-app, npm module, and CLI tool for transforming React components. 
      It was developed using Babel, Typescript, and React. My particular role in this developer tool was creating an algorithm
      for detecting component structure where ContextAPI was used, and to conditionally modify AST Nodes to inject useContext and other hooks accordingly.
    </div>
  )
}

const Musician = () => {
  console.log('rendering Musician View');
  return (
    <div>Coming Soon...</div>
  )
}

export default App;
