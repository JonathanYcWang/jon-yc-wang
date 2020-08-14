import React from "react"
import styled from "styled-components"

export default function Header(props) {
  return (
    <div style={{ margin: "40vmin 0vmin 3vmin 0vmin" }}>
      <HeaderTextGroup>
        <h2>Interested in working together?</h2>
        <h1 style={{ margin: "2vmin 0vmin 30vmin 0vmin" }}>Say Hey,
            <br></br>
            <a href="mailto: Jonw.wang@mail.utoronto.ca" class="text-reset">
            Jonw.wang@mail.utoronto.ca
          </a>
        </h1>
        <p>THANKS FOR VISITING!</p>
      </HeaderTextGroup>
    </div>
  )
}
const HeaderTextGroup = styled.div`
  text-align: center;
  h1 {
    color: ${props => props.theme.color.black.regular};
    font-family: ${props => props.theme.font.medium};
    ${props => props.theme.font_size.xlarge};
    
  }

  h2 {
    color: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.semibold};
    font-family: ${props => props.theme.font.normal};
    ${props => props.theme.font_size.larger};
  }
  p {
    padding-top: 3vmin;
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.accent};
  }
`
