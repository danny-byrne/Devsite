import React, { useState } from 'react';
import About from './components/About';
import Creative from './components/Creative';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { VIEWS } from './constants';
import { StyledApp } from './StyledApp';

// working through this
// https://khalilstemmler.com/blogs/tooling/prettier/

const App = () => {
    const [view, setView] = useState(VIEWS.about);
    const resetPage = () => {
        setTimeout(() => {
            setView('about');
        }, 2000);
    };

    //todo: add pdf view

    //todo: react router this
    const getCurrentView = () => {
        switch (view) {
            case VIEWS.about:
                return <About />;
            case VIEWS.portfolio:
                return <Portfolio />;
            case VIEWS.work:
                return <Work />;
            case VIEWS.creative:
                return <Creative />;
            case VIEWS.contact:
                return <Contact resetPage={resetPage} />;
            case VIEWS.resume:
                return <Resume />;
            default:
                return <About />;
        }
    };

    const currentView = getCurrentView();

    return (
        <StyledApp>
            <div className="App fade-in">
                <div className="Header">
                    <div>Danny Byrne</div>
                    <div>Web Developer</div>
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
                    <div className="ViewContainer fade-in">{currentView}</div>
                </div>
                <Footer />
            </div>
        </StyledApp>
    );
};

export default App;
