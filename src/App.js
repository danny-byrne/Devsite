import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Layout from './components/Layout';
import { VIEWS } from './constants';

// working through this
// https://khalilstemmler.com/blogs/tooling/prettier/

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path={VIEWS.About}
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path={VIEWS.Portfolio}
                    element={
                        <Layout>
                            <Portfolio />
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Layout>
                            <section className="not-found">
                                <p className="eyebrow">PAGE NOT FOUND</p>
                                <h1>Let’s get you back.</h1>
                                <p>This page isn’t here, but the projects are.</p>
                                <Link className="button primary" to="/Portfolio">
                                    Explore selected work →
                                </Link>
                            </section>
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
