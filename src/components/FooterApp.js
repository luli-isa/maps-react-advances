import React, { Component } from "react";
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

class FooterApp extends Component {

  render() {
    return (
      <Footer justify='between'>
        <Title>
          <s />
          React maps
        </Title>
        <Box direction='row'
          align='center'
          pad={{"between": "medium"}}>
          <Paragraph margin='none'>
            © 2016 Luisa Repele
          </Paragraph>
        </Box>
      </Footer>
    );
  }
}

export default FooterApp;
