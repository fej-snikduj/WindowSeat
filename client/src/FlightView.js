import React from 'react';
import RouteView from './RouteView';
import FlightSearch from './FlightSearch';



class FlightView extends React.Component {
  render() {
    return (
      <div className="FlightView">
        <div className="viewheader">View Your Route</div>
        <RouteView/>
        <FlightSearch search={this.props.search}/>
      </div>
    );
  }
}

export default FlightView;
