import React from 'react';
import RouteMap from './RouteMap';
import FlightSearch from './FlightSearch';
import RouteOverview from './RouteOverview';



class FlightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverview: false,
      showMap: false,
      arrival: '',
      departure: '',
      flight: '',
      arrivalLoc: '',
      departureLoc: ''
    }
  }
  changeViewState(overview, map) {
    console.log('called changeview state yay', this);
    if (!overview) {
      this.setState({showOverview: true});
    }
    if (!map) {
      this.setState({showMap: true});
    }
  }
  updateAirports(flight, arrival, departure) {
    this.setState({flight: flight, arrival: arrival, departure: departure});
    console.log(this, 'this', 'done the deed');
  }

  updateLocations(arr, dep) {
    this.setState({arrivalLoc: arr, departureLoc: dep});
    console.log(this.state);
  }
  render() {
    return (
      <div className="FlightView">
        <div className="viewheader">Select Your Flight</div>
        <FlightSearch search={this.props.search} changeViewState={this.changeViewState.bind(this)} updateAirports={this.updateAirports.bind(this)}/>
        { this.state.showOverview ? <RouteOverview state={this.state}/> : null }
        { this.state.showMap ? <RouteMap state={this.state} updateLocations={this.updateLocations.bind(this)}/> : null }
      </div>
    );
  }
}

export default FlightView;
