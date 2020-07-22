import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  let dims = 42;
  let style = {
    height: dims, width: dims, marginLeft: 5, marginRight: 5
  }
  return (
    <div>
      <SocialIcon style={style} url="https://www.linkedin.com/in/danny-byrne-la/"/>
      <SocialIcon style={style} url = "https://github.com/danny-byrne" />
    </div>
  )
}
