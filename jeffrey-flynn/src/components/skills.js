import React, { Component } from 'react';
import glamorous from 'glamorous';


const Container = glamorous.div({
  border: "1px solid skyblue",
  background: "linear-gradient(black, #1F1F1F)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  display: "grid",
  grid: "100% / 40% 60%" // 1 row, 2 columns
});

const AboutMe = glamorous.div({
  // border: "1px solid yellow",
  width: "100%",
  margin: "5%"
});

const Header = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3.5vw",
  width: "100%",
  textShadow: "0 0 3px #ffffff",
  marginBottom: "3%"
});

const Content = glamorous.div({
  // border: "1px solid white",
  width: "100%",
  color: "white",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "2em",
  lineHeight: "2"
});


class Skills extends Component {
  render() {
    return (
      <Container>
        <AboutMe>
          <Header>About Me</Header>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed facilisis quam. Nunc sed pulvinar erat, a volutpat leo. Praesent mollis diam felis, ac tempus massa pharetra ut. In mollis ipsum in scelerisque tincidunt. Aenean a efficitur dolor. Duis rhoncus placerat eros, a dapibus dui porttitor tincidunt. Donec vitae aliquet mauris, id porttitor leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed facilisis quam. Nunc sed pulvinar erat, a volutpat leo. Praesent mollis diam felis, ac tempus massa pharetra ut. In mollis ipsum in scelerisque tincidunt.
          </Content>
        </AboutMe>
      </Container>
    )
  }
}

export default Skills;