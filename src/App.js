import React, { Component } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
// import Page1 from './Page1';
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
      showPage3: true,
      rocketToShow: {},
    }
  }

  revealPage2 = () => {
    this.setState({
      showPage2: true,
    })
  }

  revealPage3 = () => {
    this.setState({
      showPage3: true,
    })
  }


  // Latest Launches
  rocketSelectionHandlerLatestLaunches = () => {
    axios({
      url: 'https://api.spacexdata.com/v3/launches/latest',
      method: 'GET',
      dataResponse: 'json'
    }).then((response) => {
      this.setState({
        rockets: [response.data],
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

            {/* Link for smooth scroll */}
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
                onClick={() => { this.rocketSelectionHandlerLatestLaunches(); this.revealPage2(); } }>
                LATEST LAUNCHES{this.state.rockets.launch_year}</button></div>
            </Link>


            {/* Link for smooth scroll */}
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
              onClick={() => {this.rocketSelectionHandlerPastLaunches(); this.revealPage2(); } }>
                PAST LAUNCHES{this.state.rockets.rocket_id}</button></div>
            </Link>


            {/* Link for smooth scroll */}
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
              onClick={() => {this.rocketSelectionHandlerUpcomingLaunches(); this.revealPage2(); }}>
                UPCOMING LAUNCHES{this.state.rockets.mission_name}</button></div>
            </Link>
          </main>
        </div>

      {
      this.state.showPage2 ?
        <div >
          <Page2
          launches={this.state.rockets}
          selectRocket= {(specificRocket) => {
            this.setState({
              rocketToShow : specificRocket,
            })
          }} />
        </div>
        :
        null
      }

      {
        this.state.showPage3 ?
          <div >
            <Page3 rocket={this.state.rocketToShow}/>
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