import React from 'react';

class RouteView extends React.Component {
  constructor(props) {
    super(props);
    this.marker1 = '';
    this.marker2 = '';
    this.poly = '';
    this.geodesicPoly = '';
    this.arr = this.props.state.arrival;
    this.dep = this.props.state.departure;
    this.geodesicPoly = '';
    this.map = '';
    this.bound = '';
  }
  initialize() {
    console.log(this, this.map);
    var instance = this;
    instance.map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: instance.arr
    });

    instance.marker1 = new window.google.maps.Marker({
      map: instance.map,
      draggable: true,
      position: instance.arr
    });

    instance.marker2 = new window.google.maps.Marker({
      map: instance.map,
      draggable: true,
      position: instance.dep
    });

    instance.bounds = new window.google.maps.LatLngBounds(
        instance.marker1.getPosition(), instance.marker2.getPosition());
    instance.map.fitBounds(instance.bounds);

    window.google.maps.event.addListener(instance.marker1, 'position_changed', instance.update);
    window.google.maps.event.addListener(instance.marker2, 'position_changed', instance.update);


    instance.geodesicPoly = new window.google.maps.Polyline({
      strokeColor: '#CC0099',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true,
      map: instance.map
    });

    instance.update();
  }

  update() {
    var instance = this;
    if(this.map === '') {
      this.initialize();
    } else {
      var path = [instance.marker1.getPosition(), instance.marker2.getPosition()];
      instance.geodesicPoly.setPath(path);
      instance.map.fitBounds(path[0], path[1]); 
    }
  }

  getLocations() {
    var arrival = this.props.state.arrival;
    var departure = this.props.state.departure;
    var updateMap = this.onMount;
    var instance = this;
    var address = 'LAX'
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': departure}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0]);
        instance.dep = results[0].geometry.location;
        geocoder.geocode({'address': arrival}, function(results, status) {
          if (status == 'OK') {
            console.log(results[0]);
            instance.arr = results[0].geometry.location;
            instance.update();
            
            
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
          <script>{this.getLocations()}</script>
        </div>
    );
  }
}


export default RouteView;




 

  //   var initMap = function() {
  //     var map = new window.google.maps.Map(document.getElementById('map'), {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 8
  //       }
  //     );
  //       console.log('should make map');
  //   }
  //   initMap();
  //   this.codeAddress();

  // }