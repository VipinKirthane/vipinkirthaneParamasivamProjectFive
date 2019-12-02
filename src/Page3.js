import React, { Component } from 'react';

class Page3 extends Component {


    render () {
        console.log(this.props.rocket);
        // rocket details
        const { flight_number, details, launch_year, mission_name, launch_success,  } = this.props.rocket;
        // rocket image
        let image;
        if(this.props.rocket.links !== undefined){
            image = this.props.rocket.links.flickr_images[0];
        }
        return (
            <section className="page3" id="page3Link">
                <div className="wrapper">
                    <h3 className="page3Header">ROCKET <span>1</span></h3>
                    <div className="page3Halves">
                        <div className="leftHalfPage3">
                            <div className="launchVideo">
                                <video src=""></video>
                            </div>
                            <div className="badgeOfRocket">
                                <img src={image} alt="Image of rocket badge"/>
                            </div>
                        </div>

                        <div className="rightHalfPage3">
                            <p><span className="page3FlightNumber">Flight Number: </span>{flight_number}</p>
                            <p><span className="page3MissionName">Mission Name: </span>{mission_name}</p>
                            <p><span className="page3StatusOfMission">Status of Mission: </span>{launch_success}</p>
                            <p><span className="page3RocketType">Details </span>{details}</p>
                            <p><span className="page3AnotherStuff">Launch Year: </span>{launch_year}</p>
                            <p><span className="page3NameSomething">Name something:</span>Lorem ipsum dolor sit.</p>
                            <p><span className="page3FlightNumber">Flight Number: </span>Lorem, ipsum.</p>
                            <p><span className="page3MissionName">Mission Name: </span>Lorem, ipsum.</p>
                            <p><span className="page3StatusOfMission">Status of Mission: </span>Lorem, ipsum dolor.</p>
                            <p><span className="page3RocketType">Rocket Type: </span>Lorem, ipsum dolor.</p>
                            <p><span className="page3AnotherStuff">another stuff: </span>Lorem, ipsum dolor.</p>
                            <p><span className="page3NameSomething">Name something: </span>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default Page3;