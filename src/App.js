import React, { Component } from 'react';
import axios from 'axios';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import './App.css';

class App extends Component {
  // 1.Initializing the state
  constructor() {
    super();
    this.state = {
      rockets: [],
    }
    // this.click = this.click.bind(this);
    // above
  }

  // 2. For axios call
  componentDidMount() {

  }

  // Latest Launches
  rocketSelectionHandlerLatestLaunches = () => {
    axios({
      url: 'https://api.spacexdata.com/v3/launches/latest',
      method: 'GET',
      dataResponse: 'json'
    }).then((response) => {
      console.log(response.data.launch_year);
      this.setState({
        rockets: response.data,
      })
    });
  }

  // Past Launches
  rocketSelectionHandlerPastLaunches = () => {
    axios({
      url: 'https://api.spacexdata.com/v3/launches/past',
      method: 'GET',
      dataResponse: 'json'
    }).then((response) => {
      console.log(response.data[1].mission_name);
      this.setState({
        rockets: response.data,
      })
    });
  }

  // Upcoming Launches
  rocketSelectionHandlerUpcomingLaunches = () => {
    axios({
      url: 'https://api.spacexdata.com/v3/launches/upcoming',
      method: 'GET',
      dataResponse: 'json'
    }).then((response) => {
      console.log(response.data[2].mission_name);
      this.setState({
        rockets: response.data,
      })
    });
  }

  render () {
    return (
      <div>
        <div className="page1">
          <h1>Space X Rocket Portfolio</h1>
          <main className="mainOptions wrapper">
            <div><button className="firstOption" onClick={this.rocketSelectionHandlerLatestLaunches}>
              LATEST LAUNCHES{this.state.rockets.flight_number}</button></div>

            <div><button className="secondOption" onClick={this.rocketSelectionHandlerPastLaunches}>
              PAST LAUNCHES{this.state.rockets.tbd}</button></div>

            <div><button className="thirdOption" onClick={this.rocketSelectionHandlerUpcomingLaunches}>
              UPCOMING LAUNCHES{this.state.rockets.flight_number}</button></div>
          </main>
        </div>
        <Page2 />
        <Page3 />
      </div>
    );
  }
}

export default App;