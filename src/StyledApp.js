import styled from 'styled-components';
import { STYLE_CONSTANTS } from './constants';

const { baseColor, mediaMinWidth, fade } = STYLE_CONSTANTS;

const APP_HEIGHT = 100;
const HEADER_HEIGHT = 10;
const FOOTER_HEIGHT = 10;
const NAV_CONTAINER_HEIGHT = 4;
const VIEW_HEIGHT = APP_HEIGHT - (HEADER_HEIGHT + FOOTER_HEIGHT + NAV_CONTAINER_HEIGHT);

export const StyledApp = styled.div`
    @media (min-width: ${mediaMinWidth}) {
        body {
            background: green;
        }
    }

    width: 100vw;
    height: ${APP_HEIGHT}vh;
    overflow-x: hidden;
    overflow-y: hidden;

  

    body {
        background: ${baseColor};
        font-family: 'Lato', sans-serif;
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0;
        overflow-x: hidden;
    }

    .App {
        background: ${baseColor};
        text-align: center;
        font-family: 'Lato', sans-serif;
        color: #333642;
        width: 100vw;
    }

    .Header {
        div:nth-child(1) {
            font-size: 2.5rem;
    
        }
         div:nth-child(2)  {
            font-size: 1.5rem;
        }
        height: ${HEADER_HEIGHT}vh;
    }

    .NavContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        // margin: auto;
        height: ${NAV_CONTAINER_HEIGHT}vh;
        width: 100%;

        // @media (min-width: ${mediaMinWidth}) {
        //     width: 50%;
        // }
    }

    .view {
        display: block;
        height: ${VIEW_HEIGHT}vh;
        width: 100%;
        overflow-x: hidden;
    }

    .ViewContainer {
        // width: 100vw;
        // display: block;

        height: 72vh;
        // overflow-y: scroll;
    }

 

    img {
        display: block;
        position: relative;
        left: 0.1vh;
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
