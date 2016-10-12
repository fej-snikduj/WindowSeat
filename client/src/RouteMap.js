import React from 'react';

class RouteView extends React.Component {
  constructor(props) {
    super(props);
    this.marker1 = '';
    this.marker2 = '';
    this.poly = '';
    this.geodesicPoly = '';
    this.arrival = this.props.arrdep[0];
    this.departure = this.props.arrdep[1];
    this.arrLoc = '';
    this.depLoc = '';
    this.geodesicPoly = '';
    this.map = '';
    this.bounds = '';
  }
  initialize() {
    var instance = this;
    instance.map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: instance.arrLoc
    });
    // var image = 'http://image.flaticon.com/icons/png/128/8/8168.png';
    var image = {
       url: 'http://image.flaticon.com/icons/png/128/8/8168.png',
       scaledSize: new window.google.maps.Size(30, 30),
     };
    instance.marker1 = new window.google.maps.Marker({
      map: instance.map,
      draggable: true,
      position: instance.arrLoc,
      animation: window.google.maps.Animation.DROP,
      icon: image
    });

    instance.marker2 = new window.google.maps.Marker({
      map: instance.map,
      draggable: true,
      position: instance.depLoc,
      animation: window.google.maps.Animation.DROP,
      icon: image
    });

    instance.bounds = new window.google.maps.LatLngBounds(
        instance.marker1.getPosition(), instance.marker2.getPosition());
    // instance.map.fitBounds(instance.bounds);
    instance.map.setZoom(3);
    instance.map.fitBounds(instance.bounds);

    // window.google.maps.event.addListener(instance.marker1, 'position_changed', instance.update);
    // window.google.maps.event.addListener(instance.marker2, 'position_changed', instance.update);


    instance.geodesicPoly = new window.google.maps.Polyline({
      strokeColor: 'black',
      strokeOpacity: .7,
      strokeWeight: 4.5,
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
      instance.bounds = new window.google.maps.LatLngBounds(
        path[0], path[1]);
      instance.map.fitBounds(instance.bounds);


      // instance.map.panToBounds(instance.bounds)
      // instance.map.setCenter(instance.bounds.getCenter());
      // instance.map.setZoom(3)
    }
  }

  getLocations() {
    
    var arrival = this.props.arrdep[0];
    var departure = this.props.arrdep[1];
    var instance = this;
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': departure}, function(results, status) {
      if (status == 'OK') {
        instance.depLoc = results[0].geometry.location;
        if (instance.marker2 !== '') {
          instance.marker2.setPosition(instance.depLoc); 
        }
        geocoder.geocode({'address': arrival}, function(results, status) {
          if (status == 'OK') {
            instance.arrLoc = results[0].geometry.location;
            if (instance.marker1 !== '') {
              instance.marker1.setPosition(instance.arrLoc);
            }
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