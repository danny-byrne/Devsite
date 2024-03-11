import styled from 'styled-components';
import { STYLE_CONSTANTS } from './constants';

const { baseColor, mediaMinWidth, imgContainerSize, fade } = STYLE_CONSTANTS;

export const StyledApp = styled.div`
    @media (min-width: ${mediaMinWidth}) {
        body {
            background: green;
        }
    }

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;

    h1 {
        font-size: 5vh;
    }

    h3 {
        font-size: 2.5vh;
    }

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
        padding-top: 30px;
        width: 100vw;
        height: 100vh;
    }

    .Header {
        height: 10vh;
        margin-bottom: 20px;
    }

    .NavContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        // margin: auto;
        height: 4vh;
        width: 100%;

        // @media (min-width: ${mediaMinWidth}) {
        //     width: 50%;
        // }
    }

    .view {
        display: block;
        height: 72vh;
        width: 100%;
        overflow-x: hidden;
    }

    .ViewContainer {
        // width: 100vw;
        // display: block;
        margin: 15px;
        height: 72vh;
        // overflow-y: scroll;
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
