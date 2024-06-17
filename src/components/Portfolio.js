/*eslint-disable*/
import React from 'react';

import styled from 'styled-components';

import { STYLE_CONSTANTS } from '../constants';

const { black } = STYLE_CONSTANTS;

const StyledPortfolio = styled.div`
    border: 1px solid ${black};
    height: 95%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const PortfolioExample = styled.div`
    border: 1px solid ${black};
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const samples = [
    {
        title: 'Dynamic Calendar',
        content: 'This was part of a printable content feature in which I created a clone of ICal functionality..',
    },
];

export default function Portfolio() {
    return (
        <StyledPortfolio>
            <div>Examples (click on the links to launch in new window)</div>
            {samples.map((sample) => {
                return (
                    <PortfolioExample>
                        <div>{sample.title}</div>
                        <div>{sample.content}</div>
                    </PortfolioExample>
                );
            })}
        </StyledPortfolio>
    );
}
