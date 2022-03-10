import React, { useState } from 'react';
import styled from 'styled-components';

import About from './components/About';
import Creative from './components/Creative';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import { VIEWS, STYLE_CONSTANTS } from './constants';

const { baseColor, mediaMinWidth, imgContainerSize, fade } = STYLE_CONSTANTS;

const StyledApp = styled.div`
  @media (min-width: ${mediaMinWidth}) {
    body {
      background: green;
    }
  }

  * {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 5vh;
  }

  h3 {
    font-size: 2.5vh;
  }

  body {
    background: $base-color;
    font-family: 'Lato', sans-serif;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
  }

  .App {
    height: 100vh;
    background: ${baseColor};
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: #333642;
  }

  .Header {
    height: 10vh;
  }

  .NavContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 4vh;
    width: 100%;

    @media (min-width: ${mediaMinWidth}) {
      width: 50%;
    }
  }

  .view {
    display: block;
    height: 78vh;
    overflow: scroll;
  }

  #ViewContainer {
    width: 100vw;
    display: block;
    margin: 15px;
  }

  .about {
    width: 100vw;

    .text {
      width: 90%;
      font-size: 1.7vh;
      display: block;

      @media (min-width: ${mediaMinWidth}) {
        width: 50%;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
  }

  .img-container {
    margin-top: 2vh;
    margin-bottom: 2vh;

    /* Set size of crop area. Setting its location happens bellow. */
    width: ${imgContainerSize};
    height: ${imgContainerSize};
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }

  img {
    display: block;
    position: relative;
    left: 0.1vh;
  }

  .contact-form {
    width: 50vw;
    @media (max-width: ${mediaMinWidth}) {
      width: 90vw;

      .message {
        height: 40vh;
      }
      .textinput {
        height: 5vh;
      }
      button {
        width: 40vw;
      }
    }

    .label {
      padding: 5px;
      font-size: 1.1rem;
    }

    .message {
      height: 40vh;
    }

    .button {
      width: 20vw;
      height: 25px;
    }
  }

  .skill {
    margin-right: 1vw;
    margin-bottom: 2vh;
    width: 100%;
    color: rgb(1, 114, 129);
  }

  .skill-list {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: flex-start;

    .skill-item {
      margin-top: 1rem;
      .category {
        display: inline;
        color: #377fb4;
        font-weight: bold;
        font-size: 1rem;
        padding-right: 1.5vh;
      }

      .list {
        display: inline;
        font-size: 1.2rem;
      }
    }
  }

  .fade-in {
    animation: fadeIn ease ${fade};
    -webkit-animation: fadeIn ease ${fade};
    -moz-animation: fadeIn ease ${fade};
    -o-animation: fadeIn ease ${fade};
    -ms-animation: fadeIn ease ${fade};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function App() {
  const [view, setView] = useState('about');
  const resetPage = () => {
    setTimeout(() => {
      setView('about');
    }, 2000);
  };

  const curView = () => {
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
          <div id="ViewContainer fade-in">{curView()}</div>
        </div>
        <Footer />
      </div>
    </StyledApp>
  );
}
