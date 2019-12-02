import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Page3 extends Component {

    render () {
        // rocket details
        const { flight_number, details, launch_year, mission_name, launch_success, rocket  } = this.props.rocket;
        // rocket image and image
        let image, video;
        if(this.props.rocket.links !== undefined){
            image = this.props.rocket.links.flickr_images[0];
            video = this.props.rocket.links.video_link;
        }

        return (
            <section className="page3" id="page3Link">
                <div className="wrapper">
                    <h2 className="page3Header">ROCKET - <span>{flight_number}</span></h2>

                    <div className="topHalfPage3launchVideo">
                        <ReactPlayer url={video} playing='false' volume='0' width='100%' control='true'/>
                    </div>

                    <div className="page3Halves">
                        <div className="leftHalfPage3">
                            <div className="rocketImage">
                                {image !== undefined ? <img src={image} alt="Image of rocket" /> : <img src="./assets/latestLaunches.gif" alt="" />}

                            </div>
                        </div>

                        <div className="rightHalfPage3">
                            <p><span className="page3FlightNumber">Flight Number: </span>{flight_number}</p>
                            <p><span className="page3MissionName">Mission Name: </span>{mission_name}</p>
                            <p><span className="page3StatusOfMission">Status of Mission: </span>{this.props.launchType !== 'upcoming' ? <p>{launch_success ? "Success" : "Failure"}</p> : <p>Not Applicable</p>}</p>
                            <p><span className="page3RocketType">Details </span>{details}</p>
                            <p><span className="page3AnotherStuff">Launch Year: </span>{launch_year}</p>
                            {/* <p><span className="page3NameSomething">Name something:</span>{rocket.rocket_id}</p> */}
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