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

  render() {
    return (
      <div className="FlightSearch">
        <form>
          <input id="flightinput" placeholder="Enter Flight Number" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.props.search.bind(this, this.state.value, function(response) {
            console.log(response)
          })}>Search</button>
        </form>
      </div>
    );
  }
}

export default FlightSearch;
