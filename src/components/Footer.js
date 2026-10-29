import React from 'react';
import { SOCIAL_URLS } from '../constants';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div>
                <strong>Danny Byrne</strong>
                <p>Developer, technologist & artist.</p>
            </div>
            <div className="footer-links">
                <a href={SOCIAL_URLS.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                </a>
                <a href={SOCIAL_URLS.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                </a>
            </div>
            <small>© {new Date().getFullYear()} Danny Byrne</small>
        </footer>
    );
}
