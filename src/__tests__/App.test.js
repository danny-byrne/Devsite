/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Work from '../components/Work'
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

let div;

beforeEach(() => {
  div = document.createElement('div')
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});

test('renders About, Work, Creative tabs', () => {
  const { getByText } = render(<App />);
  const About = getByText("About");
  const Work = getByText("Work");
  const Creative = getByText("Creative");
  expect(About).toBeInTheDocument();
  expect(Work).toBeInTheDocument();
  expect(Creative).toBeInTheDocument();
})

test('renders About, Work, Creative tabs', () => {
  const { getByText } = render(<App />);
  const About = getByText("About");
  const Work = getByText("Work");
  const Creative = getByText("Creative");
  expect(About).toBeInTheDocument();
  expect(Work).toBeInTheDocument();
  expect(Creative).toBeInTheDocument();
})






// test('handles navigation onClicks', () => {
//   const { getByText } = render(
//     <App />
//   )
//   const About = getByText("About");
//   const Work = getByText("Work");
//   const Creative = getByText("Creative");
//   fireEvent.click(About);
//   fireEvent.click(Work);
//   fireEvent.click(Creative);
//   expect(About).toHaveBeenCalledTimes(1);
//   expect(Work).toHaveBeenCalledTimes(1);
//   expect(Creative).toHaveBeenCalledTimes(1);
// })

// test('handles navigation to About', () => {
//   function handleChange(e) {
//     expect(e.target.value).toEqual('about');
//     done();
//   }
//   const { getByText } = render(
//     <App onChange={handleChange} />
//   );
//   const node = getByText("About");
//   fireEvent.change(node, { target: { value: "about"}})
// });

afterEach(cleanup);