import React, { Component } from 'react';
import threeEntryPoint from "../three.js/entryPoint";
import MilkyWay from "../three.js/milkyway/index";
import IoIosInfinite from "react-icons/lib/io/ios-infinite";
import { Container, Title, SubTitle } from "../styling/introduction";

class Introduction extends Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    return (
      <div ref={element => this.threeRootElement = element} id="container" style={Container}>
        <Title>Jeffrey Flynn</Title>
        <SubTitle>
          Software Engineer
            <IoIosInfinite style={{ paddingRight: "0.1%", margin: "0 7px", color: "#92BCDB" }} />
          Creative Thinker 
            <IoIosInfinite style={{ paddingRight: "0.1%", margin: "0 7px", color: "#92BCDB" }} />
          Intuitive Leader
        </SubTitle>
      </div>
    )
  }
}

export default Introduction;