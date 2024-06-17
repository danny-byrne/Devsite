import React from 'react';

import styled from 'styled-components';

import { SKILLS, TEXT, STYLE_CONSTANTS } from '../constants';

const image = require('../assets/images/Danny1.jpg');

const { mediaMinWidth } = STYLE_CONSTANTS;

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .about {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90%;

        .text {
            width: 90%;
            font-size: 1.7vh;
            display: block;

            @media (min-width: ${mediaMinWidth}) {
                width: 50%;
            }
        }
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
`;

const About = () => {
    const skillList = SKILLS.map((skill) => {
        const { title, content } = skill;
        return (
            <div key={title} className="skill-item">
                <div className="category">{title}:</div>
                <div className="list">{content}</div>
            </div>
        );
    });

    return (
        <StyledAbout>
            <div className="about">
                <div className="text">{TEXT}</div>
            </div>
            <div className="img-container">
                <img src={image} />
            </div>
            <div className="skill-list">{skillList}</div>
        </StyledAbout>
    );
};

export default About;
