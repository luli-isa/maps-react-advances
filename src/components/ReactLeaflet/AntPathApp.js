import React, { Component } from "react";
import Box from "grommet/components/Box";
import { Map, GeoJSON, TileLayer } from 'react-leaflet'
import topodata_italy from "../../dati/regioni_italy.json";
import path from "../../dati/sample-path-region.json";
import { randomColor } from '../../utils'
import AntPath from "react-leaflet-ant-path";
import Paragraph from 'grommet/components/Paragraph';

class AntPathApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      lat: 41.91893781173967,
      lng: 12.6567584228514,
      zoom: 4,
      path,
      options: {color: "black"},
      messages: ["Waiting change"]
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
          With <strong>react-leaflet-ant-path</strong>,
          you can show a path on map with animation like
          this simply pass to AntPath component an array of coordinates
        </Paragraph>
        <hr/>
        <hr/>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <GeoJSON data={topodata_italy.features} style={this.getStyle} onEachFeature={this.onEachFeature}/>
          <AntPath positions={this.state.path} options={this.state.options}/>
        </Map>
      </Box>
    );
  }
}

export default AntPathApp;
