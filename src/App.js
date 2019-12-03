import React, { Component } from 'react';
// Package for axios call
import axios from 'axios';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

class App extends Component {
  //Initializing the state
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

  // Function for revealing Page 2
  revealPage2 = () => {
    this.setState({
      showPage2: true,
    }, () => {
        document.getElementById('page2Link').scrollIntoView({
          behavior: 'smooth'
        });
    })
  }

  // Function for revealing Page 3
  revealPage3 = () => {
    this.setState({
      showPage3: true,
    }, () => {
      document.getElementById('page3Link').scrollIntoView({
        behavior: 'smooth'
      });
    })
  }

  // Axios call for Latest Launches Data
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

  // Axios call for Past Launches Data
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

  // Axios call for Upcoming Launches Data
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
          <h1>SPACE X ROCKET PORTFOLIO</h1>
          <main className='mainOptions wrapper'>
              <div className="firstOptionParent"><button
                className="firstOption"
                tabindex="0"
                onClick={() => { this.rocketSelectionHandlerLatestLaunches() } }>
                LATEST LAUNCHES{this.state.rockets.launch_year}</button></div>

              <div><button
              className="secondOption"
              tabindex="0"
              onClick={() => {this.rocketSelectionHandlerPastLaunches() } }>
                PAST LAUNCHES{this.state.rockets.rocket_id}</button></div>

              <div><button
              className="thirdOption"
              tabindex="0"
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