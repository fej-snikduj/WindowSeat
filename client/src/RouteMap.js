import React from 'react';

class RouteView extends React.Component {
  onMount() {
    var initMap = function() {
      var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        }
      );
        console.log('should make map');
    }
    initMap();
    this.codeAddress();

  }
  codeAddress() {
    var updateState = this.props.updateLocations;
    var arrival = this.props.state.arrival;
    var departure = this.props.state.departure;
    var arr, dep;
    var address = 'LAX'
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': departure}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0]);
        dep = results[0].geometry.location;
        geocoder.geocode({'address': arrival}, function(results, status) {
          if (status == 'OK') {
            console.log(results[0]);
            arr = results[0].geometry.location;
            
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        })
      }
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  render() {
    return (
        <div>
          <script>{this.onMount()}</script>
        </div>
    );
  }
}


export default RouteView;