import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const GMAPS_API_KEY = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" //borrowed from tutorial

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GMAPS_API_KEY
})(MapContainer)