import React from "react"
import headshot from "../assets/headshot.png"

export default function Header(props) {
  return (
    <div>
      <div>Hi, I'm</div>
      <div>Jonathan Wang</div>
      <div>Software Developer | Product Manager.</div>
      <img src={headshot} alt="Logo" />
    </div>
  )
}
