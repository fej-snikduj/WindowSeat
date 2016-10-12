import React from 'react';
import logo from './plane-icon1.svg';
import './App.css';
import FlightView from './FlightView';
import UserFrame from './UserFrame';
import search from './helpers';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Explore Your Route with <span className="brand"> WindowSeat </span></h2>
        </div>
        <div className="mainContent">
          <FlightView search={search}/>
          <UserFrame/>
        </div>
      </div>
    );
  }
}

export default App;
