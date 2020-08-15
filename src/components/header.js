import React from "react"
import Img from "../assets/headshot.png"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaBehanceSquare, FaLinkedin } from "react-icons/fa"

export default function Header(props) {
  return (
    <div>
      <Container fluid style={{ margin: "10vmin 1vmin 5vmin 1vmin" }}>
        <Row className="justify-content-center align-items-center">
          <Col sm="auto">
            <Row className="justify-content-start align-items-center">
              <HeaderTextGroup>
                <Subtitle>Hi, I'm</Subtitle>
                <h1>Jonathan</h1>
                <LastName>Wang.</LastName>
                <h2> Software Developer | Product Manager </h2>
              </HeaderTextGroup>
            </Row>
            <Row
              className="justify-content-start align-items-start"
              style={{ margin: "10vmin 0 5vmin 0" }}
            >
              <HeaderButton href="https://github.com/JonathanYcWang" target="_blank" style={{ margin: "0 3vmin 0 0" }}>
                <div style={{ float: "right", margin: "1.2vmin 0 0 0"}}>
                  GITHUB
                  <i style={{ margin: "0 2vmin 0.5vmin 2.8vmin" }}>
                    <FaGithub size={"2.3vmin"} />
                  </i>
                </div>
              </HeaderButton>
              <HeaderButton href="https://www.linkedin.com/in/jonathan-yc-wang/" target="_blank" style={{ margin: "0 3vmin 0 0" }}>
                <div style={{ float: "right", margin: "1.2vmin 0 0 0" }}>
                  LINKEDIN
                  <i style={{ margin: "0 2vmin 0.5vmin 2.2vmin" }}>
                    <FaLinkedin size={"2.3vmin"} />
                  </i>
                </div>
              </HeaderButton>
              <HeaderButton href="https://www.behance.net/jonathanwang5" target="_blank" style={{ margin: "0 3vmin 0 0" }}>
                <div style={{ float: "right", margin: "1.2vmin 0 0 0"}}>
                  BEHANCE
                  <i style={{ margin: "0 2vmin 0.5vmin 2vmin" }}>
                    <FaBehanceSquare size={"2.3vmin"} />
                  </i>
                </div>
              </HeaderButton>
              {/* <HeaderButton style={{ margin: "0 3vmin 0 0" }}>
                <div style={{ float: "right" }}>
                  INSTAGRAM
                  <i style={{ margin: "0 2vmin 0.5vmin 1.5vmin" }}>
                    <FaInstagram size={"2.3vmin"} />
                  </i>
                </div>
              </HeaderButton> */}
            </Row>
          </Col>
          <Col sm="auto">
            <img style={{ height: "90vmin" }} src={Img} alt="hi" />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Subtitle = styled.h5`
  ${props => props.theme.font_size.larger};
  font-family: ${props => props.theme.font.semibold};
  margin-bottom: 16px;
`
const LastName = styled.h1`
  color: ${props => props.theme.color.accent};
`

const HeaderTextGroup = styled.div`
  margin: 0vmin 5vmin 0vmin 0vmin;
  h1 {
    margin: 0 0 1vmin;
    text-shadow: 1px 3px 7px #9f9f9f;
    ${props => props.theme.font_size.xxlarge};
  }

  h2 {
    padding-top: 3vmin;
    font-size: 2.5vmin;
    line-height: 2.5vmin;
    letter-spacing: 0.3vmin;
    font-family: ${props => props.theme.font.semibold};
  }
`

const HeaderButton = styled.a`
  font-size: 1.4vmin;
  font-family: ${props => props.theme.font.medium};
  letter-spacing: 1.6px;
  color: white;
  height: 4.9vmin;
  width: 19vmin;
  cursor: pointer;
  background: transparent
    linear-gradient(180deg, #ff6767 0%, #ff9898 65%, #ffbcbc 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 7px 12px 25px #00000029;
  border-radius: 40px;
  opacity: 1;

  &:hover {
    border-color: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.accent};
    background: white;
  }
`
