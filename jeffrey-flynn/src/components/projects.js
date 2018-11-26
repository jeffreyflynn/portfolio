import React, { Component } from 'react';
import glamorous from 'glamorous';
import crowd from "../images/people_walking.jpeg";
import sesho from "../images/sesho.PNG";


const Container = glamorous.div({
  background: "linear-gradient(#1F1F1F, #2D2D2D)",
  // height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  // border: "1px solid transparent"
  // marginBottom: "3%"
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
  grid: "100% / 22% 22% 22%",
  gridGap: "5%",
  justifyContent: "center",
  // border: "2px solid black",
  paddingBottom: "5%"
});

const TextContent = glamorous.div({
  width: "100%",
  height: "100%",
  // border: "1px solid yellow",
  borderRadius: "5px",
  background: `url(${crowd})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: "0 0 5px 1px black",
  opacity: "0.3"
});

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
        <SubContainer>
          <TextContent></TextContent>
          <TextContent></TextContent>
          <TextContent></TextContent>
        </SubContainer>
      </Container>
    )
  }
}

export default Projects;