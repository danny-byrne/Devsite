/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import workConstants from '../constants/workConstants';

export default function Work() {
  return (
    <>
      <div className="SampleBox">
        {workConstants.map((e) => (
          <WorkExample key={e.title} params={e} />
        ))}
      </div>
    </>
  );
}

const WorkExample = (props) => {
  const { src, href, title, blurb, tech } = props.params;

  return (
    <>
      <div className="hLine">
        <span>{title}</span>
      </div>
      <iframe
        className="Sample"
        type="text/html"
        src={src}
        title={title}
      ></iframe>
      <span className="worktext">
        <a href={href}>{title}</a>
        {blurb}
      </span>
      <br />
      <span>
        Technologies: <b>{`${tech}`}</b>
      </span>
    </>
  );
};
