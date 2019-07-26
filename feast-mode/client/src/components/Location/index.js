import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Geocode from "react-geocode";

import './Map.css'
// import LocationSearchInput from './AutocompleteSearch'

const API_KEY = "AIzaSyDygU61iYWBAL1-YltIBuKg4gi8c1G2tMQ"


Geocode.setApiKey();
Geocode.enableDebug();


const markerStyle = {
    height: '3rem',
    width: '3rem',
    marginTop: '-50px'
}

const imgStyle = {
    height: '100%'
}


  const Marker = ({ title }) => (
    <div style={markerStyle}>
      <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
      <h3>{title}</h3>
    </div>
  );

  class DisplayMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: { 
                lat: 5.6219868, 
                lng: -0.23223 
            },
            loading: true,
            placeSearch: null,
            autocomplete: null,
            componentForm: {
                street_number: 'short_name',
                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name'
            },
            location: "None",
      }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(position => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    loading: false,
                })
            })
            // Geocode.fromLatLng("48.8583701", "2.2922926").then(
            //     response => {
            //       const address = response.results[0].formatted_address;
            //       this.setState({location: address})
            //     },
            //     error => {
            //         alert(error);
            //     }
            //   );
       } 
        else {
            alert("Sorry, geolocation is not available on your device. You need that to use this app");
        }
    }


    



    render() {
        if(this.state.loading)
            return null

      return (
        <div className="map">
            {/* <div>{this.state.location}</div> */}
            <div id="locationField">
                <input 
                    id="autocomplete"
                    placeholder="Enter your address"
                    // onFocus={geolocate()}
                    type="text"
                />
            </div>
            <GoogleMap
                bootstrapURLKeys={{ key: '' }}
                center={{ lat: this.state.center.lat, lng: this.state.center.lng }}
                zoom={14}
            >
                <Marker
                    title={'Current Location'}
                    lat={this.state.center.lat}
                    lng={this.state.center.lng}
                />
            </GoogleMap>
        </div>
      )
    }
  }

  export default DisplayMap;





