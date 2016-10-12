import React from 'react';


class FlightSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleClick(event) {
    var value = this.state.value;
    var updateAirports = this.props.updateAirports.bind(this);
    var changeViewState = this.props.changeViewState.bind(this);
    this.props.search(value, function(response) {
      updateAirports(response.flight, response.arrival, response.departure);
      changeViewState(false, false);
    });
  }

  render() {
    return (
      <div className="FlightSearch">
        <form>
          <input id="flightinput" placeholder="Enter Flight Number" value={this.state.value} onChange={this.handleChange}></input>
          <button type="button" onClick={this.handleClick.bind(this)}>Search</button>
        </form>
      </div>
    );
  }
}

export default FlightSearch;

//   render() {
//     return (
//       <div className="FlightSearch">
//         <form>
//           <input id="flightinput" placeholder="Enter Flight Number" value={this.state.value} onChange={this.handleChange}></input>
//           <button type="button" onClick={this.props.search.bind(this, this.state.value, function(response) {
//             console.log(response)
//           })}>Search</button>
//         </form>
//       </div>
//     );
//   }
// }