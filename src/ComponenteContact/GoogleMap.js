import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends Component {
  render() {
    return (
      <div className="googleMap">
        <Map
          style={{
            position: "relative",
            padding: " 0 var(--margine) 0 var(--margine)",
            height: "700px",
            width: "100%",
          }}
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={16}
          initialCenter={{
            lat: 44.480425499999996,
            lng: 24.6118849,
          }}
        >
          <Marker
            title={"Euro Trade Consulting"}
            name={"Euro Trade Consulting"}
            position={{ lat: 44.480425499999996, lng: 24.6118849 }}
          >
            <InfoWindow marker={true} visible={true}>
              <div>
                <h1>ceva</h1>
              </div>
            </InfoWindow>
          </Marker>
        </Map>
        <InfoWindow></InfoWindow>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCBkYlYSgXSTv4av1S86uKFGZpTGYSGMlY",
})(MapContainer)
