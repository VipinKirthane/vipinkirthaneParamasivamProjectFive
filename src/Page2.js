import React, { Component } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";

class Page2 extends Component {

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
            <section className="page2" id="page2Link">
                <div className="wrapper">
                    <h2>CHOOSE A ROCKET OF INTEREST</h2>
                    <div className="firstRowRocketList">
                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondRowRocketList">
                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>

                        <div className="rocket1">
                            <div className="topHalf">
                                <h4 className="flightNumber topHalf">Flight Number</h4>
                                <p>1</p>
                            </div>
                            <div className="missionName">
                                <p>Mission Name</p>
                                <p>FatSat</p>
                            </div>
                            <div className="missionStatus">
                                <p>Launch Status</p>
                                <p>Failure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Page2;