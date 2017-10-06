import React, { Component } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph"
import { Map, GeoJSON } from 'react-leaflet'
import topodata_world from "../../dati/world.json";
import { randomColor } from '../../utils'

class ReactLeaflet extends Component {

  constructor(props){
    super(props)
    this.state = {
      lat: 41.91893781173967,
      lng: 12.6567584228514,
      zoom: 4
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
      <Box full={true} align="center">
        <Paragraph>
          <strong>react-leaflet</strong> draw shapefile over maps (OpenStreetMap)
          or without <strong>TileLayer</strong> you can view a shape without internet connection.
        </Paragraph>
        <hr/>
        <hr/>
        <Map center={position} zoom={this.state.zoom}>
          <GeoJSON data={topodata_world.features} style={this.getStyle} onEachFeature={this.onEachFeature}/>
        </Map>
      </Box>
    );
  }
}

export default ReactLeaflet;
