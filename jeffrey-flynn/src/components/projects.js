import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  background: "linear-gradient(#1F1F1F, #2D2D2D)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  border: "1px solid skyblue"
});

const Header = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3.5vw",
  width: "100%",
  textShadow: "0 0 3px #ffffff",
  margin: "1%"
});

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
      </Container>
    )
  }
}

export default Projects;