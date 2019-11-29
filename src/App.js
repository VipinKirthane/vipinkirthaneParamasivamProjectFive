import React, { Component } from 'react';
import axios from 'axios';
import Page1 from './Page1';
import './App.css';


// export default class RocketList extends React.Component {
//   state = {
//     rocket: []
//   }

//   componentDidMount() {
//     axios.get('https://api.spacexdata.com/v3/launches/past')
//       .then(response => {
//         const rocketsList = response.data;
//         this.setState({persons});
//       });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.rocketsList.map(rocket => <li>{rocket.flight_number}</li>)}
//       </ul>
//     )
//   }

class App extends Component {
  render () {
    // const posts = this.state.posts.map( post=> {
    //   return <Post title={post.title} />
    // });

    return (
      <div>
        <Page1 />
      </div>
    );
  } 
}

export default App;