import React, { Component } from 'react';
// Package for embedding video
import ReactPlayer from 'react-player';

class Page3 extends Component {

    render() {
        const { flight_number, details, launch_year, mission_name, launch_success } = this.props.rocket;
        let image, video;
        if (this.props.rocket.links !== undefined) {
            // Storing in a variable because these objects are nested
            image = this.props.rocket.links.flickr_images[0];
            video = this.props.rocket.links.video_link;
        }
        console.log(video);
        return (
            <section className="page3" id="page3Link">
                <div className="wrapper">
                    <h2 className="page3Header">ROCKET - <span>{flight_number}</span></h2>

                    {/* Video element of the selected rocket */}
                    <div className="topHalfPage3launchVideo tabindex='0'">
                        {
                            video !== undefined && video !== null
                                ? <ReactPlayer url={video} playing={false} volume={0} width='100%' className="videoPlayerBox" tabIndex='0' control='true' />
                                : <img className="videoFallback" src="./assets/videoFallback.png" alt="Video not found" />
                        }
                    </div>

                    <div className="page3Halves">
                        {/* Image element of the selected rocket */}
                        <div className="leftHalfPage3">
                            <div className="rocketImage tabindex='0'">
                                {image !== undefined ? <img src={image} alt="A rocket in the frame" /> : <img src="./assets/imageNotFound.jpg" alt="Missing image" />}
                            </div>
                        </div>

                        {/* Detailed information about the rocket */}
                        <div className="rightHalfPage3 tabindex='0'">
                            <p><span className="page3FlightNumber">Rocket Number: </span>{flight_number}</p>
                            <p><span className="page3MissionName">Mission Name: </span>{mission_name}</p>
                            <p><span className="page3AnotherStuff">Launch Year: </span>{launch_year}</p>
                            <p><span className="page3StatusOfMission">Status of Mission: </span>{this.props.launchType !== 'upcoming' ? <span className="successOrFailure">{launch_success ? "Success" : "Failure"}</span> : <span className="notApplicable">Not Applicable</span>}</p>
                            <p><span className="page3RocketType">Details: </span>{details}</p>
                        </div>
                    </div>
                </div>
                <footer>Copyright © Vipin Kirthane 2020</footer>
            </section>
        )
    }
}

export default Page3;