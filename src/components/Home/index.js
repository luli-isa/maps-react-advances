import React, { Component } from "react";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Headline";
import logo from "../../assets/github_icon.png";

class Home extends Component {

  render() {
    return (
      <Box full={true} align="center" justify="center">
        <Image src={logo} size='thumb' />
        <Headline>React maps test</Headline>
        <Paragraph size="small" align="center">
          I would like test some react component about maps.
        </Paragraph>
      </Box>
    );
  }
}

export default Home;
