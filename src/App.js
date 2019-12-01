import React, { Component } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
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
      showPage2: false,
      showPage3: false,
    }
    // this.click = this.click.bind(this);
    // above
  }

  hidingPage2 = () => {
    this.setState({
      showPage2: true,
    })
  }

  hidingPage3 = () => {
    this.setState({
      showPage3: true,
    })
  }

  // 2. For axios call
  componentDidMount() {
    // <Page2 />
  }

  // Latest Launches
  rocketSelectionHandlerLatestLaunches = () => {
    axios({
      url: 'https://api.spacexdata.com/v3/launches/latest',
      method: 'GET',
      dataResponse: 'json'
    }).then((response) => {
      console.log(response.data.launch_year);
      // const latestLaunchesList = ({flight_number, mission_name, launch_year}) => {
      //   console.log(`The flight number is ${flight_number}, mission name is ${mission_name} and launch year is ${launch_year}`);
      // }
      // latestLaunchesList(response.data[0]);

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
        <div className="page1" id="mainLink">
          <h1>Space X Rocket Portfolio</h1>
          <main className="mainOptions wrapper">

            {/* {
            this.state.hidingPage2 ?
              <div><button
                className="firstOption"
                onClick={() => this.rocketSelectionHandlerLatestLaunches, this.hidingPage2}>
                LATEST LAUNCHES{this.state.rockets.launch_year}</button></div>
                : null
            } */}


            <Link
              activeClass="active"
              to="page2Link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div><button
                className="firstOption"
                onClick={() => this.rocketSelectionHandlerLatestLaunches, this.hidingPage2}>
                LATEST LAUNCHES{this.state.rockets.launch_year}</button></div>
            </Link>

            {/* {
              this.state.hidingPage2 ?
              <div><button
                className="secondOption"
                onClick={() => this.rocketSelectionHandlerPastLaunches, this.hidingPage2}>
                PAST LAUNCHES{this.state.rockets.rocket_id}</button></div>
              : null
            } */}

            <Link
              activeClass="active"
              to="page2Link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div><button
              className="secondOption"
              onClick={() => this.rocketSelectionHandlerPastLaunches, this.hidingPage2}>
                PAST LAUNCHES{this.state.rockets.rocket_id}</button></div>
            </Link>

            {/* {
              this.state.hidingPage2 ?
                <div><button
                  className="thirdOption"
                  onClick={() => this.rocketSelectionHandlerUpcomingLaunches, this.hidingPage2}>
                  UPCOMING LAUNCHES{this.state.rockets.rocket_id}</button></div>
                : null
            } */}

            <Link
              activeClass="active"
              to="page2Link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div><button
              className="thirdOption"
              onClick={() => this.rocketSelectionHandlerUpcomingLaunches, this.hidingPage2}>
                UPCOMING LAUNCHES{this.state.rockets.mission_name}</button></div>
            </Link>
          </main>
        </div>

      {
      this.state.showPage2 ?
        <div >
          <Page2 />
        </div>
        :
        null
      }

        {
          this.state.showPage3 ?
            <div >
              <Page3 />
            </div>
            :
            null
        }




        {/* <Page3 /> */}
      </div>
    );
  }
}

export default App;