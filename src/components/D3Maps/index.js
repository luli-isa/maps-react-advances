import React, { Component } from "react";
import Box from "grommet/components/Box";
import states from "../../dati/states.json"
import "../../css/polygon.css"
//import { PolygonGroup, Map } from "react-d3-map-core"

//var Map = require('react-d3-map').Map;
//var PolygonGroup = require('react-d3-map').PolygonGroup;



class D3Maps extends Component {

  constructor(props){
    super(props)
    this.state = {
      width: 1000,
      height: 800,
      scale: 4,
      scaleExtend: [],
      center:[-100.95, 40.7]
    }
  }

  popupContent(d){
    return 'hi, i am a polygon'
  }

  onPolygonClick(component, d, i){

  }

  onPolygonCloseClick(component, id){

  }

  onPolygonMouseOver(component, d, i){

  }

  onPolygonMouseOut(component, d, i){

  }

  render() {
    console.log(this.state.width)
    console.log(this.state.height)
    console.log(this.state.center)

    return (
      <Box full={true} align="center">
        {/* <Map width={1000} height={800}>

        </Map> */}

        {/* <Map width={this.state.width} height={this.state.height} center={this.state.center}
          clip={true}
          bounds={[[0, 0], [this.state.width, this.state.height]]}>
          <g>
            <PolygonGroup
              key={"polygon-test"}
              data={states}
              popupContent={this.popupContent}
              onClick={this.onPolygonClick}
              onCloseClick={this.onPolygonCloseClick}
              onMouseOver={this.onPolygonMouseOver}
              onMouseOut={this.onPolygonMouseOut}
              polygonClass= {"your-polygon-css-class"}/>
          </g>
        </Map> */}
      </Box>
    );
  }
}

export default D3Maps;
