import React, { Component } from "react";
import Box from "grommet/components/Box";
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor'
import Paragraph from 'grommet/components/Paragraph';

class Links extends Component {
  render() {
    return (
      <Box full={true} align="center">
        <Paragraph>
          In this list you can find some important
          link to download shapefile and others
        </Paragraph>
        <List>
          <ListItem justify='between' separator='horizontal'>
            <Anchor href='http://www.diva-gis.org/gdata' label='ShapeFile'/>
          </ListItem>
          <ListItem justify='between'>
            <Anchor href='http://www.gadm.org/version2' label='Wolrd data'/>
          </ListItem>
          <ListItem justify='between'>
            <Anchor href='http://www.diva-gis.org/gdata' label='gdata'/>
          </ListItem>
        </List>

      </Box>
    );
  }
}


export default Links;
