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
      arrdep: ['', ''],
      flight: ''
    }
  }
  changeViewState(overview, map) {
    if (!overview) {
      this.setState({showOverview: true});
    }
    if (!map) {
      this.setState({showMap: true});
    }
  }
  updateAirports(flight, arrival, departure) {
    this.setState({flight: flight, arrdep: [arrival, departure]});
  }
  render() {
    return (
      <div className="FlightView">
        <div className="viewheader">Select Your Flight</div>
        <FlightSearch search={this.props.search} changeViewState={this.changeViewState.bind(this)} updateAirports={this.updateAirports.bind(this)}/>
        { this.state.showOverview ? <RouteOverview state={this.state}/> : null }
        { this.state.showMap ? <RouteMap arrdep={this.state.arrdep}/> : null }
      </div>
    );
  }
}

export default FlightView;
