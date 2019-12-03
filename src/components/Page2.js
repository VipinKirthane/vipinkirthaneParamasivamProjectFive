import React, { Component } from 'react';
// Package for smooth scroll
import { Link } from "react-scroll";

class Page2 extends Component {
    render () {
        return (
            <section className='page2' id='page2Link'>
                <div className='wrapper'>
                    <h2>CHOOSE A ROCKET OF INTEREST</h2>
                    <div className='firstRowRocketList'>
                        {/* Rocket Floating Home Button */}
                        <Link
                            activeClass='active'
                            to='mainLink'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="rocketHomeButton"
                            tabindex='0'
                        >
                            <i class="fas fa-rocket"></i>
                        </Link>
                        {
                            this.props.launches.map((rocket) => {
                                const { flight_number, mission_name, launch_success } = rocket;
                                return (
                                    <div>
                                        {/* Link is for smooth scroll */}
                                        <Link
                                            activeClass='active'
                                            to='page3Link'
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                            href='#page3Link'
                                            className="rocket1Button"
                                            tabindex='0'
                                            onClick = {() => {this.props.selectRocket(rocket); this.props.revealPage3()}}
                                        >
                                            {/* The rocket selection cards */}
                                            <div className="rocketsList">
                                                <div className='topHalf'>
                                                    <h4 className='flightNumber topHalf'>Rocket Number</h4>
                                                    <p>{flight_number}</p>
                                                </div>
                                                <div className='missionName'>
                                                    <p>Mission Name</p>
                                                    <p>{mission_name}</p>
                                                </div>
                                                <div className='missionStatus'>
                                                    <p>Launch Status</p>
                                                    { this.props.launchType !== 'upcoming' ? <p>{launch_success ? 'Success' : 'Failure'}</p> :<p>Not Applicable</p>}
                                                </div>
                                                </div>
                                        </Link>
                                    </div>
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