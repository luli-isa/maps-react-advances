import React, { Component } from "react";
import Box from "grommet/components/Box";
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import topodata_italy from "../../dati/regioni_italy.json";
import { randomColor } from '../../utils'
class Online extends Component {

  constructor(props){
    super(props)
    this.state = {
      lat: 41.91893781173967,
      lng: 12.6567584228514,
      zoom: 5
    }
  }

  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
  }

  getStyle(feature, layer) {
    return {
      color: randomColor(),
      weight: 2,
      opacity: 0.65
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Box full={true} align="center" justify="between">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <GeoJSON data={topodata_italy.features} style={this.getStyle} onEachFeature={this.onEachFeature}/>
        </Map>
      </Box>
    );
  }
}

export default Online;
