import React, { Component } from 'react';
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction />
        {/* <Skills />
        <Projects />
        <Contact /> */}
      </div>
    );
  }
}

export default App;
