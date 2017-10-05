import React, { Component } from "react";
import Box from "grommet/components/Box";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Headline";

class Home extends Component {

  render() {
    return (
      <Box full={true} align="center" justify="center">
        <Headline>React maps test</Headline>
        <Paragraph size="small" align="center">
          I would like test some react component about maps.
        </Paragraph>
      </Box>
    );
  }
}

export default Home;
