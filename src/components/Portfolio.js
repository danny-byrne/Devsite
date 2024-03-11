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

export default function Portfolio() {
    return (
        <StyledPortfolio>
            <div>Portfolio</div>
        </StyledPortfolio>
    );
}
