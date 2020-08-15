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
        <div class="col-5" style={{ margin: "0vmin 0vmin 0vmin 10vmin" }}>
          <Disappear style={{ width: "80%" }} src={Img} alt="hi" />
        </div>

        <AboutMe>
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
    flex: 0 0 40%;
    max-width: 40%;
    margin: 0vmin 10vmin 0vmin 5vmin;
  }
  @media only screen and (max-width: ${props => props.theme.screen.md}) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    margin: 0vmin 10vmin 0vmin 20vmin;
  }
`

const SubTitle = styled.h2`
  color: ${props => props.theme.color.secondary};
`

const HeaderTextGroup = styled.div`
  text-align: justify;
  opacity: 0.93;
  h1 {
    color: ${props => props.theme.color.black.regular};
    font-size: 3.5vw;
    letter-spacing: 0.1vmin;
    
  }

  h2 {
    padding-top: 3vmin;
    font-family: ${props => props.theme.font.semibold};
    ${props => props.theme.font_size.large};
  }

  p {
    font-family: ${props => props.theme.font.medium};
    font-size: 1vw;
    line-height: 2.25vmin;
    color: ${props => props.theme.color.black.light};
  }
`
