import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Footer from './Footer';

export default function Layout({ children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="site-shell">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="site-header">
                <Link to="/" className="wordmark" aria-label="Danny Byrne home">
                    danny byrne<span>.</span>
                </Link>
                <nav aria-label="Main navigation">
                    <NavLink to="/About" className={({ isActive }) => (isActive || pathname === '/' ? 'active' : '')}>
                        About
                    </NavLink>
                    <NavLink to="/Portfolio">Selected work</NavLink>
                    <a href="https://github.com/danny-byrne" target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                    </a>
                </nav>
            </header>
            <main id="main">{children}</main>
            <Footer />
        </div>
    );
}
