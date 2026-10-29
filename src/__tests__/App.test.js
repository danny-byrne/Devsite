import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

beforeEach(() => {
    window.history.replaceState({}, '', '/');
    window.scrollTo = jest.fn();
});
afterEach(cleanup);

test('visitors can launch the bundled demo directly from the homepage', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /useful software/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /try the live demo/i })).toHaveAttribute('href', '/demos/kindred/');
});

test('selected work exposes both the live app and source code', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Selected work' }));
    expect(screen.getByRole('heading', { name: 'Kindred' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /launch demo/i })).toHaveAttribute('href', '/demos/kindred/');
    expect(screen.getByRole('link', { name: /view source/i })).toHaveAttribute(
        'href',
        'https://github.com/danny-byrne/care-tracker/tree/kindred-care-demo/demo',
    );
});

test('unknown routes offer a way back to selected work', () => {
    window.history.replaceState({}, '', '/missing-page');
    render(<App />);
    expect(screen.getByRole('heading', { name: /let’s get you back/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: /explore selected work/i }));
    expect(screen.getByRole('heading', { name: 'Kindred' })).toBeInTheDocument();
});
