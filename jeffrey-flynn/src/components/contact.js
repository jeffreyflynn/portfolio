import React, { Component } from 'react';
import * as FontAwesome from "react-icons/lib/fa";
import { 
  GoogleMap, 
  Marker, 
  withGoogleMap, 
  withScriptjs 
} from "react-google-maps"; // https://tomchentw.github.io/react-google-maps/
import {
  mapStyle,
  Container,
  ContactContent,
  Header,
  Social,
  Form
} from "../styling/contact";

const AtlanticCityMap = withScriptjs(withGoogleMap((props) => 
  <GoogleMap defaultZoom={9} defaultCenter={{ lat: 39.3643, lng: -74.4229 }} defaultOptions={{ styles: mapStyle }}>
    {props.isMarkerShown && <Marker position={{ lat: 39.3643, lng: -74.4229 }} />}
  </GoogleMap>
));

class Contact extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.windowResize(), false);
  }

  windowResize = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  }

  input = (type, placeholder, height) => {
    return (
      <div className="webflow-style-input" style={{ height: height, width: "60%", margin: "0 0 1em" }}>
        <input 
          type={type}
          placeholder={placeholder}
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            border: "none",
            background: "transparent",
            ":focus": { color: "rgba(255,255,255,.75)" }
          }}
        />
      </div>
    )
  }

  contactForm = () => {
    return (
      <Form>
        {this.input("text", "Your Name", "25px")}
        {this.input("email", "Contact Email", "25px")}
        {this.input("text", "Subject", "25px")}
        {this.input("text", "Message", "125px")}
      </Form>
    )
  }

  render() {
    return (
      <Container style={{ height: this.state.height, width: this.state.width }}>
        <ContactContent>
          <Header>Let's Connect!</Header>
          {this.contactForm()}
          <Social>
            <FontAwesome.FaLinkedin size={"3em"} color="#73C2FB" />
            <FontAwesome.FaGithub size={"3em"} color="#73C2FB" style={{ margin: "0 1%" }} />
            <FontAwesome.FaEnvelope size={"3em"} color="#73C2FB" />
          </Social>
        </ContactContent>
        <AtlanticCityMap 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Iq0b12_8NhDk4sdyFiSFonbkjx1XnME&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%", width: "50%" }} />}
          mapElement={<div style={{ height: "100%", width: "100%" }} />}
        />
      </Container>
    )
  }
}

export default Contact;