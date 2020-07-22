import React, { useState } from 'react'
import About from './components/About'
import Creative from './components/Creative'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'



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
      case 'contact':
        return <Contact resetPage={resetPage}/>
      default:
         return <About />
    }
  }

  const resetPage = () => {
    setTimeout(() => {
      setView('about')
    }, 2000)
  }


  return (
    <div className="App fade-in">
      <div className="Header">
        <h1>Danny Byrne</h1>
            <h3>Software Developer</h3>
      </div>
      <div className="NavContainer fade-in" >
        <div className="NavButton" value="about" onClick={() => setView("about")}>About</div>
        <div className="NavButton" value="work" onClick={() => setView("work")}>Work</div>
        <div className="NavButton" value="creative" onClick={() => setView("creative")}>Creative</div>
        <div className="NavButton" value="creative" onClick={() => setView("contact")}>Contact</div>
      </div>
      <div className="view">{curView(view)}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

