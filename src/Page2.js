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
            <section className="page2" id="page2Link">
                <div className="wrapper">
                    <h2>CHOOSE A ROCKET OF INTEREST</h2>
                    <div className="firstRowRocketList">
                        {
                            this.props.launches.map((rocket) => {
                                const { flight_number, mission_name, launch_success } = rocket;
                                return (
                                    <Link
                                        activeClass="active"
                                        to="page3Link"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        onClick = {() => {this.props.selectRocket(rocket); this.props.revealPage3()}}
                                    >
                                        <a href='#page3Link' className="rocket1Button">
                                            <div className="rocket1">
                                                <div className="topHalf">
                                                    <h4 className="flightNumber topHalf">Flight Number</h4>
                                                    <p>{flight_number}</p>
                                                </div>
                                                <div className="missionName">
                                                    <p>Mission Name</p>
                                                    <p>{mission_name}</p>
                                                </div>
                                                <div className="missionStatus">
                                                    <p>Launch Status</p>
                                                    <p>{ launch_success ? "Success" : "Failure" }</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Page2;