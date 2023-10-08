import React from 'react';
import { Document, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import dbResume from '../assets/dbresume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin-bottom: 10px;
`;

const Resume = () => {
    return (
        <StyledFooter>
            <Document file={dbResume} />
        </StyledFooter>
    );
};

export default Resume;
