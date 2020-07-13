import React from 'react'

export default function Work() {
  return (
    <div className="SampleBox">
    <iframe className="Sample" type="text/html" src="https://www.hookd.dev/" title="HOOKD"></iframe>
    <a href="www.hookd.dev">Hookd</a> is a web-app, npm module, and CLI tool for transforming React components. 
    It was developed using Babel, Typescript, and React. One particular contribution of mine to this tool was creating an algorithm
    for detecting component structure where ContextAPI was used, and to conditionally modify AST Nodes to inject useContext and other hooks accordingly.
  </div>
  )
}
