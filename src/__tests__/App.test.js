/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Work from '../components/Work'
import { cleanup, render, fireEvent, getByText, screen, getAllByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';

let div;

beforeEach(() => {
  div = document.createElement('div')
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});


test('renders About, Work, Creative tabs, default load is About', () => {
  render(<App />);
  // screen.debug()
  expect(screen.getByText(/about/i)).toBeInTheDocument()
  expect(screen.getByText(/work/i)).toBeInTheDocument()
  expect(screen.getByText(/creative/i)).toBeInTheDocument()
  expect(screen.getByText(/contact/i)).toBeInTheDocument()
  expect(screen.getByText(/languages/i)).toBeInTheDocument()
})

test('handles navigation state changes with nav clicks', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/work/i))
  expect(screen.getByText(/hookd/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText(/creative/i))
  expect(screen.getByText(/coming soon.../i)).toBeInTheDocument()
  fireEvent.click(screen.getByText(/contact/i))
  expect(screen.getByText(/name/i)).toBeInTheDocument()
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