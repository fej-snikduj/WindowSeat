import React from 'react';



class RouteOverview extends React.Component {
  render() {
    return (
      <div className="RouteOverview">
        You have selected 
        <span className="place"> {this.props.state.flight}</span>
        <br></br>
        You are flying from 
        <span className="place"> {this.props.state.departure}</span> 
        to 
        <span className="place"> {this.props.state.arrival}</span> 
        <br></br>
        You're route is on the right ---->!
      </div>
    );
  }
}

export default RouteOverview;