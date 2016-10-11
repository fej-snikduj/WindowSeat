import React from 'react';
import RouteMap from './RouteMap';
import FlightSearch from './FlightSearch';
import RouteOverview from './RouteOverview';



class FlightView extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      showOverview: false,
      showMap: false,
      arrival: '',
      departure: '',
      flight: ''
    }
  }
  changeViewState(overview, map) {
    console.log('called changeview state yay', this);
    if (overview) {
      this.setState({showOverview: !this.state.showOverview});
    }
    if (map) {
      this.setState({showMap: !this.state.showOverview});
    }
  }
  updateAirports(flight, arrival, departure) {
    this.setState({flight: flight, arrival: arrival, departure: departure});
    console.log(this, 'this', 'done the deed');
  }
  render() {
    return (
      <div className="FlightView">
        <div className="viewheader">View Your Route</div>
        <FlightSearch search={this.props.search} changeViewState={this.changeViewState.bind(this)} updateAirports={this.updateAirports.bind(this)}/>
        { this.state.showOverview ? <RouteOverview state={this.state}/> : null }
        { this.state.showMap ? <RouteMap/> : null }
      </div>
    );
  }
}

export default FlightView;
