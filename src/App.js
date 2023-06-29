import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Hero from "./Components/Herosection";
import Accomodation from "./Components/Accomodation";
import Abouttheday from "./Components/Abouttheday";
import Gettingthere from "./Components/Gettingthere";
import RSVP from "./Components/RSVP";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
    <div className="Home">
        <Section 
          dark={true}
          id="section1"
        />  <Hero/>    </div>
    <div className="Accomodation">
        <Section
          dark={false}
          id="section2"
        /> <Accomodation/>  </div>
        <div className="Gettingthere">
        <Section
          dark={true}
          id="section3"
        />  <Gettingthere/>  </div>
        <div className="Abouttheday">
        <Section 
          dark={false}
          id="section4"
        /> <Abouttheday/>  </div>
        <div className="RSVP">
        <Section
          dark={true}
          id="RSVP"
        />  <RSVP/>
        </div>
      </div>
    );
  }
}

export default App;
