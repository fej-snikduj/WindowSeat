function codeAddress(callback) {
    var updateState = this.props.updateLocations;
    var arrival = this.props.state.arrival;
    var departure = this.props.state.departure;
    var arr, dep;
    var address = 'LAX'
    var geocode = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0]);
        dep = results[0].geometry.location;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status == 'OK') {
            console.log(results[0]);
            arr = results[0].geometry.location; 
            updateState(arr, dep);
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