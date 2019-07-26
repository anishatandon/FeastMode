import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  }

  const markerStyle = {
    height: '50px',
    width: '50px',
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
            center: { lat: 5.6219868, lng: -0.23223 },
            loading: true,
        }
      }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
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
       } 
        else {
            alert("Sorry, geolocation is not available on your device. You need that to use this app");
            }
    }

    render() {
        if(this.state.loading)
            return null

      return (
        <div >
          <GoogleMap
            style={mapStyles}
            bootstrapURLKeys={{ key: 'AIzaSyDygU61iYWBAL1-YltIBuKg4gi8c1G2tMQ' }}
            center={{ lat: this.state.center.lat, lng: this.state.center.lng }}
            zoom={14}
          >
            <Marker
            title={'Current Location'}
            lat={this.state.center.lat}
            lng={this.state.center.lng}
          >
            </Marker>
          </GoogleMap>
        </div>
      )
    }
  }

  export default DisplayMap;





