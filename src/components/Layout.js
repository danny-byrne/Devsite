import React from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import { StyledLayout } from './StyledLayout';
import { VIEWS } from '../constants';
import NavButton from './NavButton';

const Layout = ({ children }) => {
    let navigate = useNavigate();

    return (
        <StyledLayout>
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
                            onClick={() => {
                                console.log({ section });
                                navigate(section);
                            }}
                        />
                    ))}
                </div>
                {children}
                <Footer />
            </div>
        </StyledLayout>
    );
};

export default Layout;
