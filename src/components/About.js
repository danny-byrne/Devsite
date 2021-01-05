/* eslint-disable import/newline-after-import */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as Constants from '../constants';
const image = require('../assets/images/Danny1.jpg');

export default function About() {
  const { skills, text } = Constants;
  const skillList = skills.map((e) => {
    const { t, c } = e;
    return (
      <div key={t} className="skill-item">
        <div className="category">{t}:</div>
        <div className="list ">{c}</div>
      </div>
    );
  });

  return (
    <>
      <div className="about">
        <div className="text">{text}</div>
      </div>
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="skill-list">{skillList}</div>
    </>
  );
}
