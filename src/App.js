/*eslint-disable*/
import React, { useState } from 'react';
import About from './components/About';
import Creative from './components/Creative';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import { VIEWS } from './constants';
import { StyledApp } from './StyledApp';

const App = () => {
  const [view, setView] = useState(VIEWS.about);
  const resetPage = () => {
    setTimeout(() => {
      setView('about');
    }, 2000);
  };

  const getCurrentView = () => {
    switch (view) {
      case VIEWS.about:
        return <About />;
      case VIEWS.work:
        return <Work />;
      case VIEWS.creative:
        return <Creative />;
      case VIEWS.contact:
        return <Contact resetPage={resetPage} />;
      default:
        return <About />;
    }
  };

  const currentView = getCurrentView()

  return (
    <StyledApp>
      <div className="App fade-in">
        <div className="Header">
          <h1>Danny Byrne</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="NavContainer fade-in">
          {Object.keys(VIEWS).map((section) => (
            <NavButton
              key={VIEWS[section]}
              value={VIEWS[section]}
              onClick={() => setView(VIEWS[section])}
            />
          ))}
        </div>
        <div className="view">
          <div id="ViewContainer fade-in">{currentView}</div>
        </div>
        <Footer />
      </div>
    </StyledApp>
  );
};

export default App;
