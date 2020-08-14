import React from "react"
import Img from "../assets/aboutMe.png"
import styled from "styled-components"

export default function Header(props) {
  return (
    <div
      class="container-fluid"
      style={{ margin: "10vmin 0vmin 10vmin 0vmin" }}
    >
      <div class="row align-items-center justify-content-between">
        <div class="col" style={{ margin: "0vmin 15vmin 0vmin 15vmin" }}>
          <Disappear style={{ width: "80%" }} src={Img} alt="hi" />
        </div>

        <AboutMe style={{ margin: "0vmin 15vmin 0vmin 15vmin" }}>
          <HeaderTextGroup>
            <SubTitle>Welcome to my corner of the web</SubTitle>
            <h1>a bit about me.</h1>
            <p>
              I’m recent new grad from the University of Toronto with a skill
              set in Computer Science, Statistics & Management dedicated to
              making a positive impact through exceptional software solutions.
            </p>
            <br />
            <p>
              I’m always learning and working on something new! Feel free to
              take a look around and see what I’ve been up to recently.
            </p>
          </HeaderTextGroup>
        </AboutMe>
      </div>
    </div>
  )
}

const Disappear = styled.img`
  @media only screen and (max-width: ${props => props.theme.screen.md}) {
    display: none;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`

const AboutMe = styled.div`
  @media only screen and (min-width: ${props => props.theme.screen.md}) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media only screen and (max-width: ${props => props.theme.screen.md}) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`

const SubTitle = styled.h2`
  color: ${props => props.theme.color.secondary};
`

const HeaderTextGroup = styled.div`

  opacity: 0.93;
  h1 {
    color: ${props => props.theme.color.regular};
    ${props => props.theme.font_size.xlarge};
  }

  h2 {
    padding-top: 3vmin;
    font-family: ${props => props.theme.font.semibold};
    ${props => props.theme.font_size.large};
  }

  p {
    font-family: ${props => props.theme.font.normal};
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.black.light};
  }
`
