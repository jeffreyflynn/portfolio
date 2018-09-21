import React, { Component } from 'react';
import glamorous from 'glamorous';


const Container = glamorous.div({
  background: "linear-gradient(black, #1F1F1F)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  display: "grid",
  grid: "100% / 50% 50%" // 1 row, 2 columns
});

const AboutMe = glamorous.div({
  height: "100%",
  width: "100%",
  border: "1px solid white",
  margin: "3%"
});

const Header = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3.5vw",
  width: "100%",
  textShadow: "0 0 3px #ffffff",
});

const Content = glamorous.div({
  width: "100%",
  height: "100%"
})


class Skills extends Component {
  render() {
    return (
      <Container>
        <AboutMe>
          <Header>About Me</Header>

        </AboutMe>
      </Container>
    )
  }
}

export default Skills;