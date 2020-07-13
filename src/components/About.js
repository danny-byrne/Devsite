import React from 'react'
import * as Constants from '../constants';
const image = require('../assets/images/Danny1.jpg');

export default function About() {
  const { skills, text } = Constants;
  const skillList = skills.map(e => {
    const { t, c } = e;
    return (
          <div key={t} className="skill-item">
            <div className="category">{t}:</div>
            <div className="list ">{c}</div>
          </div>
    )
  })

  return (
    <>
      <div className="about-text">{text}</div>
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="skill-list">
        {skillList}
      </div>
    </>
  )
}
