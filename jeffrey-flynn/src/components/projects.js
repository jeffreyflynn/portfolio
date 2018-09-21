import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  // backgroundColor: "#3D3D3D",
  background: "linear-gradient(#1F1F1F, #2D2D2D)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
});

class Projects extends Component {
  render() {
    return (
      <Container></Container>
    )
  }
}

export default Projects;