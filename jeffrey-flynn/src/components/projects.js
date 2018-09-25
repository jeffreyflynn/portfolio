import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  background: "linear-gradient(#1F1F1F, #2D2D2D)",
  // height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  // border: "1px solid transparent"
});

const Header = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3.5vw",
  width: "100%",
  // textShadow: "0 0 3px #ffffff",
  padding: "3%"
});

const SubContainer = glamorous.div({
  width: "100%",
  height: "50vh",
  display: "grid",
  grid: "100% / 22% 22% 22% 22%",
  gridGap: "3%",
  justifyContent: "center",
  border: "2px solid black",
});

const TextContent = glamorous.div({
  width: "100%",
  height: "100%",
  border: "1px solid yellow"
});

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
        <SubContainer>
          <TextContent></TextContent>
        </SubContainer>
      </Container>
    )
  }
}

export default Projects;