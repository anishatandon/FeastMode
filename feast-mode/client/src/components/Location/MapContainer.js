import React from 'react'

const GMAPS_API_KEY = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" //borrowed from tutorial

export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div>Map will go here</div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: GMAPS_API_KEY,
  })(Container)