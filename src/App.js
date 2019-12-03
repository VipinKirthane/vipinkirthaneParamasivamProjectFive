import React, { Component } from 'react';
import axios from 'axios';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

class App extends Component {
  // 1.Initializing the state
  constructor() {
    super();
    this.state = {
      rockets: [],
      showPage2: false,
      showPage3: false,
      rocketToShow: {},
      launchType: '',
    }
  }

  revealPage2 = () => {
    this.setState({
      showPage2: true,
    }, () => {
        document.getElementById('page2Link').scrollIntoView({
          behavior: 'smooth'
        });
    })
  }

  revealPage3 = () => {
    this.setState({
      showPage3: true,
    }, () => {
      document.getElementById('page3Link').scrollIntoView({
        behavior: 'smooth'
      });
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
      }, () => { this.setState({
        launchType: 'latest'
      }); this.revealPage2() })
    }).catch ( () => {
      alert('Network Error! Please Reload Page')
    })
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
      }, () => { this.setState({
        launchType: 'past'
      }) ; this.revealPage2() })
    }).catch ( () => {
      alert('Network Error! Please Reload page');
    })
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
      }, () => { this.setState({
        launchType: 'upcoming'
      }) ;this.revealPage2() })
    }).catch ( () => {
      alert('Network Error! Please Reload Page');
    })
  }

  render () {
    return (
      <div>
        <div className='page1' id='mainLink'>
          <h1>Space X Rocket Portfolio</h1>
          <main className='mainOptions wrapper'>

              <div className="firstOptionParent"><button
                className="firstOption tabindex='0'"
                onClick={() => { this.rocketSelectionHandlerLatestLaunches() } }>
                LATEST LAUNCHES{this.state.rockets.launch_year}</button></div>

              <div><button
              className="secondOption tabindex='0'"
              onClick={() => {this.rocketSelectionHandlerPastLaunches() } }>
                PAST LAUNCHES{this.state.rockets.rocket_id}</button></div>

              <div><button
              className="thirdOption tabindex='0'"
              onClick={() => {this.rocketSelectionHandlerUpcomingLaunches()}}>
                UPCOMING LAUNCHES{this.state.rockets.mission_name}</button></div>

          </main>
        </div>

      {
      this.state.showPage2 ?
        <div >
          <Page2
          launches={this.state.rockets}
          revealPage3={this.revealPage3}
          launchType = {this.state.launchType}
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
            <Page3 rocket={this.state.rocketToShow}
                launchType={this.state.launchType}/>
          </div>
          :
          null
      }
      </div>
    );
  }
}

export default App;

// Include accessibility
// Include placeholder image for missing video in upcoming launches
// Put things in the folder

// Add google fonts
// fix sizes of the rocket cards

// Link is bursting out in page 2

// Comment the code
// Try to add ternary operator for empty details for flights such as 104
// Each child should have unique index
// check the console for errors