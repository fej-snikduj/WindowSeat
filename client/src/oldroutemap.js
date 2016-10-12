import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import GOOGLE_MAPS_API_KEY from './config/googlemapsapi.js';
import _ from 'lodash';
var Spinner = require('react-spinkit');


const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
    )
  )
);

class RouteView extends React.Component {
  render(){
    return(
    <AsyncGettingStartedExampleGoogleMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry`}
      loadingElement={
      <div style={{ height: `100%` }}>
        <Spinner spinnerName='double-bounce' />
      </div>
      }
      containerElement={
        <div style={{ height: `100%` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
      onMapLoad={_.noop}
      onMapClick={_.noop}
      // markers={markers}
      onMarkerRightClick={_.noop}
    />)
  }
};







export default RouteView;