import React from 'react';
import { Link } from 'react-router';
import { SKILLS } from '../constants';
import portrait from '../assets/images/Danny1.jpg';

export default function About() {
    return (
        <>
            <section className="hero">
                <div>
                    <p className="eyebrow">DANNY BYRNE · FRONTEND DEVELOPER</p>
                    <h1>
                        Useful software.
                        <br />
                        <span>A human perspective.</span>
                    </h1>
                    <p className="hero-copy">
                        I build thoughtful web experiences with React, TypeScript, and Next.js—from complex product
                        workflows to tools that make everyday life a little simpler.
                    </p>
                    <div className="actions">
                        <Link className="button primary" to="/Portfolio">
                            Explore selected work <span>↗</span>
                        </Link>
                        <a
                            className="button secondary"
                            href="https://www.linkedin.com/in/danny-byrne-la/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Let’s connect
                        </a>
                    </div>
                    <p className="hero-footnote">Product experience at Microsoft and Maya Health.</p>
                </div>
                <figure className="portrait">
                    <img src={portrait} alt="Danny Byrne" />
                    <figcaption>Developer. Technologist. Artist.</figcaption>
                </figure>
            </section>
            <section className="featured-strip">
                <div>
                    <p className="eyebrow">NEW · INTERACTIVE PROJECT</p>
                    <h2>Meet Kindred.</h2>
                    <p>
                        A care coordination demo with an editable calendar, shared schedule, and printable care plan.
                        Fictional people. Working interactions.
                    </p>
                    <div className="actions">
                        <a className="text-link" href="/demos/kindred/" target="_blank" rel="noopener noreferrer">
                            Try the live demo ↗
                        </a>
                        <Link className="text-link muted-link" to="/Portfolio">
                            Read the project story →
                        </Link>
                    </div>
                </div>
                <a
                    href="/demos/kindred/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="strip-image"
                    aria-label="Open the Kindred demo"
                >
                    <img
                        src="/images/kindred-preview.jpg"
                        alt="Kindred care overview with daily schedule and care partners"
                    />
                </a>
            </section>
            <section className="about-section">
                <div>
                    <p className="eyebrow">A LITTLE ABOUT ME</p>
                    <h2>
                        Curiosity connects
                        <br />
                        the dots.
                    </h2>
                </div>
                <div>
                    <p>
                        I’m a software developer, technologist, and artist across many mediums. I enjoy exploring new
                        ideas, personal transformation, and the wild places of the American West.
                    </p>
                    <p>
                        My work brings together frontend engineering, product interfaces, and an interest in how people
                        navigate complex information.
                    </p>
                </div>
            </section>
            <section className="skills-section">
                <p className="eyebrow">MY TOOLKIT</p>
                <h2>Tools for the job.</h2>
                <div className="skill-grid">
                    {SKILLS.map(({ title, content }) => (
                        <div className="skill-card" key={title}>
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
