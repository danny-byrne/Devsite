import React from 'react';

export default function Work() {
  return (
    <>
    <div className="SampleBox">
      <iframe className="Sample" type="text/html" src="https://www.hookd.dev/" title="HOOKD"></iframe>
      <div className="worktext">      <a href="www.hookd.dev">Hookd</a> is a web-app, npm module, and CLI tool for transforming React components. 
        It was developed using Babel, Typescript and React.
        A particular contribution of mine to this tool was creating algorithms
        for detecting component structure where ContextAPI was used,
        and to modify AST Nodes to inject useContext and other hooks accordingly.
      </div>
    </div>
    </>
  );
}
