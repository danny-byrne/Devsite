import React from 'react';

const source = 'https://github.com/danny-byrne/care-tracker/tree/kindred-care-demo/demo';
export default function Portfolio() {
    return (
        <>
            <section className="work-heading">
                <p className="eyebrow">SELECTED WORK</p>
                <h1>Ideas, made tangible.</h1>
                <p>Interactive projects and a look at the product work behind them.</p>
            </section>
            <article className="project featured-project">
                <div className="project-image">
                    <a
                        href="/demos/kindred/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Kindred live demo"
                    >
                        <img
                            src="/images/kindred-preview.jpg"
                            alt="Kindred dashboard showing a fictional recipient’s daily care schedule"
                        />
                    </a>
                </div>
                <div className="project-detail">
                    <p className="eyebrow">01 / INTERACTIVE DEMO</p>
                    <h2>Kindred</h2>
                    <p className="project-subtitle">A little more clarity in everyday care.</p>
                    <p>
                        An independent care coordination demo built around a fictional recipient and care circle. One
                        schedule powers a daily overview, weekly calendar, and printable plan.
                    </p>
                    <ul className="feature-list">
                        <li>Create, edit, and delete appointments</li>
                        <li>Navigate weeks and view overlapping events</li>
                        <li>Check off tasks, save changes locally, and reset</li>
                        <li>Print a weekly care plan or save it as a PDF</li>
                    </ul>
                    <div className="tags">
                        <span>JavaScript</span>
                        <span>Responsive CSS</span>
                        <span>Local storage</span>
                        <span>Print layouts</span>
                    </div>
                    <div className="actions">
                        <a className="button primary" href="/demos/kindred/" target="_blank" rel="noopener noreferrer">
                            Launch demo ↗
                        </a>
                        <a className="button secondary" href={source} target="_blank" rel="noopener noreferrer">
                            View source ↗
                        </a>
                    </div>
                    <p className="project-note">
                        Fresh implementation of care coordination concepts relevant to my frontend experience. No
                        Microsoft product source, branding, or real care data. No download or sign-in required.
                    </p>
                </div>
            </article>
            <div className="project-grid">
                <article className="project small-project">
                    <p className="eyebrow">02 / DOCUMENT-DRIVEN PUBLISHING</p>
                    <h2>Fieldnotes</h2>
                    <p>
                        A DOCX-to-React publishing demo with a fictional field journal. Convert a local Word document,
                        inspect its HTML, and explore quote boxes, callouts, and illustrated article components.
                    </p>
                    <div className="tags">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>Mammoth</span>
                        <span>Vite</span>
                    </div>
                    <div className="actions" style={{ marginTop: 0 }}>
                        <a className="text-link" href="/demos/fieldnotes/" target="_blank" rel="noopener noreferrer">
                            Launch publishing demo ↗
                        </a>
                        <a
                            className="text-link"
                            href="https://github.com/danny-byrne/docx-publishing-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View publishing source ↗
                        </a>
                    </div>
                </article>
                <article className="project small-project">
                    <p className="eyebrow">03 / PRODUCT UI ENGINEERING</p>
                    <h2>Maya Health</h2>
                    <p>
                        A video walkthrough of my UI engineering work using React, Next.js, and Ant Design. A look at
                        the interface work beyond the repository.
                    </p>
                    <div className="tags">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>Ant Design</span>
                    </div>
                    <a
                        className="text-link"
                        href="https://www.youtube.com/watch?v=8991sEePRmw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch project walkthrough ↗
                    </a>
                </article>
            </div>
            <section className="work-cta">
                <h2>Let’s build something useful.</h2>
                <p>Find more projects on GitHub, or connect with me on LinkedIn.</p>
                <div className="actions">
                    <a
                        className="button secondary"
                        href="https://github.com/danny-byrne"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More on GitHub ↗
                    </a>
                    <a
                        className="text-link"
                        href="https://www.linkedin.com/in/danny-byrne-la/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect on LinkedIn ↗
                    </a>
                </div>
            </section>
        </>
    );
}
