import React, { Component } from 'react';

class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            rocketFakeList: ['Falcon 1', 'Falcon 2', 'Falcon 3', 'Falcon 4']
        };
    }

    render () {
        return (
            <div className="page2">
                {/* <div className="pageTwoElements wrapper">
                    <h2>
                        {this.state.rocketFakeList.map((props) => { 
                            return <h2 name={props}
                        })}
                    </h2>
                    <p>Launch Date:######</p>
                    <div className="rocketListing">PIC #</div>
                </div> */}

                <h2>{this.state.rocketFakeList}</h2>
            </div>
        )
    }
}









export default Page2;