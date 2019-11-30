import React, { Component } from 'react';
import Axios from 'axios';

class Page1 extends Component {
    
    render () {
        return (
            <div class="page1">
                <h1>Space X Rocket Portfolio</h1>
                <main className="mainOptions wrapper">
                    <div className="firstOption">LATEST LAUNCHES</div>
                    <div className="secondOption">PAST LAUNCHES</div>
                    <div className="thirdOption">UPCOMING LAUNCHES</div>
                </main>
            </div>
        )
    }
}

export default Page1;