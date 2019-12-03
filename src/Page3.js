import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Page3 extends Component {

    render () {
        // rocket details
        const { flight_number, details, launch_year, mission_name, launch_success } = this.props.rocket;
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

                    <div className="topHalfPage3launchVideo tabindex='0'">
                        <ReactPlayer url={video} playing='false' volume='0' width='100%' control='true'/>
                    </div>

                    <div className="page3Halves">
                        <div className="leftHalfPage3">
                            <div className="rocketImage tabindex='0'">
                                {/* The alt text of imageNotFound.jpg is empty because console said it's redundant */}
                                {image !== undefined ? <img src={image} alt="A rocket in the frame" /> : <img src="./assets/imageNotFound.jpg" alt="" />}
                            </div>
                        </div>

                        <div className="rightHalfPage3 tabindex='0'">
                            <p><span className="page3FlightNumber">Flight Number: </span>{flight_number}</p>
                            <p><span className="page3MissionName">Mission Name: </span>{mission_name}</p>

                            <p><span className="page3AnotherStuff">Launch Year: </span>{launch_year}</p>
                            <p><span className="page3StatusOfMission">Status of Mission: </span>{this.props.launchType !== 'upcoming' ? <span>{launch_success ? "Success" : "Failure"}</span> : <span>Not Applicable</span>}</p>

                            <p><span className="page3RocketType">Details: </span>{details}</p>
                            {/* <p><span className="page3NameSomething">Name something:</span>{rocket.rocket_id}</p> */}
                        </div>
                    </div>
                </div>
                <footer>Copyright © Vipin Kirthane 2019</footer>
            </section>
        )
    }
}

export default Page3;