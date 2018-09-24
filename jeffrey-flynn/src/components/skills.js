import React, { Component } from 'react';
import glamorous from 'glamorous';


const Container = glamorous.div({
  border: "1px solid skyblue",
  background: "linear-gradient(black, #1F1F1F)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
  display: "flex",
  flexDirection: "column",
  // grid: "100% / 100%" // 1 row, 1 column
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

const Content = glamorous.div({
  // border: "1px solid white",
  width: "85%",
  color: "white",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1.8em",
  lineHeight: "1.8",
  margin: "0 auto",
  textAlign: "center",
  marginBottom: "2%"
});

const CardContainer = glamorous.div({
  // border: "1px solid white",
  width: "100%",
  height: "100%",
  display: "grid",
  grid: "100% / 25% 25% 25%",
  gridGap: "0 3%", // space between rows, space between columns
  justifyContent: "center",
  alignContent: "center",
  marginBottom: "1.5%"
});

const SkillCard = glamorous.div({
  width: "100%",
  height: "100%",
  // border: "1px solid skyblue",
  borderRadius: "5px",
  background: "linear-gradient(#1F1F1F, black)",
  boxShadow: "0 0 5px 1px #ebebeb",
  display: "grid",
  grid: "15% 80% / 100%",
  gridGap: "2% 0"
});

const CardTitle = glamorous.div({
  width: "100%",
  height: "100%",
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "2.5em",
  textAlign: "center",
  borderBottom: "1px solid #73C2FB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1% 0"
});

const CardList = glamorous.div({
  width: "100%",
  height: "100%",
  // border: "1px solid red",
});

const Item = glamorous.div({
  width: "100%",
  color: "white",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1.5em",
  lineHeight: "1.8",
  textAlign: "center",
});

class Skills extends Component {
  render() {
    return (
      <Container>
          <Header>Skills</Header>
          <Content>
            My persuit of a career in software engineering began in early 2018 when I enrolled in Lambda School.
            
            For the ensuing six months, I spent nearly all of my free time immersed in course material, technical documentation, and raw syntax.

            The culmination of this desire for knowledge and mastery is listed below.
          </Content>
          <CardContainer>
            <SkillCard>
              <CardTitle>Front End</CardTitle>
              <CardList>
                <Item>React</Item>
                <Item>Redux</Item>
                <Item>Context API</Item>
                <Item>CSS3</Item>
                <Item>Glamorous</Item>
                <Item>Styled Components</Item>
                <Item>AJAX -- Axios</Item>
                <Item>LESS</Item>
                <Item>Media Queries</Item>
                <Item>WebGL -- Three.js</Item>
                {/* <Item></Item> */}
              </CardList>
            </SkillCard>

            <SkillCard>
              <CardTitle>Back End</CardTitle>
            </SkillCard>

            <SkillCard>
              <CardTitle>Industry Knowledge</CardTitle>
            </SkillCard>
          </CardContainer>
      </Container>
    )
  }
}

export default Skills;