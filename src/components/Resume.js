import React from 'react';
import { Document } from 'react-pdf';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import { SOCIAL_URLS } from '../constants';

const RESUME_PATH = '../asssets/dbresume.pdf';

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin-bottom: 10px;
`;

const size = 60;
const margin = 7;

const Resume = () => {
    return (
        <StyledFooter>
            <Document file={RESUME_PATH} />
        </StyledFooter>
    );
};

export default Resume;
