import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
  state = { lightOn: false, switch1On: false, switch2On: false, switch3On: false };

  toggleSwitch1 = () => {
    this.setState((prevState) => ({
      lightOn: !prevState.lightOn, // Toggle the light's state
      switch1On: !prevState.switch1On, // Toggle Switch 1's state
    }));
  };

  toggleSwitch2 = () => {
    this.setState((prevState) => ({
      lightOn: !prevState.lightOn, // Toggle the light's state
      switch2On: !prevState.switch2On, // Toggle Switch 2's state
    }));
  };

  toggleSwitch3 = () => {
    this.setState((prevState) => ({
      lightOn: !prevState.lightOn, // Toggle the light's state
      switch3On: !prevState.switch3On, // Toggle Switch 3's state
    }));
  };

  render() {
    let wallClass = this.state.lightOn ? "wall on" : "wall off";

    return (
      <div className={wallClass}>
        {/* Add Paragraph Above Switches */}
        <header>
          <h1>3-Way Switch Control App</h1>
          <p>This demonstrates the Electrical Engineering concept of a 3 way switch</p> 
          <p>Toggle the switches below to control the light. Each switch can independently turn the light on or off.</p>
        </header>

        <div className="switches-container">
          <h2 className="switches-title"></h2> {/* Title above the switches */}
          <div className="switches">
            <Switch toggle={this.toggleSwitch1} switchNumber="Switch 1" isOn={this.state.switch1On} />
            <Switch toggle={this.toggleSwitch2} switchNumber="Switch 2" isOn={this.state.switch2On} />
            <Switch toggle={this.toggleSwitch3} switchNumber="Switch 3" isOn={this.state.switch3On} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
