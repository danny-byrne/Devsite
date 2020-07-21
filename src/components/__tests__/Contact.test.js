/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Contact from '../Contact'
import { cleanup, render, fireEvent, screen, getByText } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

/**
 * really good article on RTL 
 *  https://medium.com/@jero786/react-testing-library-pro-tips-eba7181eb6fb 
 * 
 * firing events
 * https://testing-library.com/docs/dom-testing-library/api-events
 */

test('renders a form with name, email, subject, message fields, and sumbit button', () => {
  const { getByLabelText, getByText } = render(<Contact />)

  // getByLabelText(/your name/i)
  getByLabelText(/your email/i)
  getByLabelText(/enter subject/i)
  getByLabelText(/your message/i)
  getByText(/send/i)  
  // const submitButton = getByText(/send/i)
  // fireEvent.click(submitButton)


})


