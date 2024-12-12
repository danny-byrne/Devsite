import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
