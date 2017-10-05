import React, { Component } from "react";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Paragraph";

class NotFound extends Component {
  render() {
    return (
      <Box full={true} align="center" justify="center">
        <Headline>404 Page not found</Headline>
        <Paragraph size="large" align="center">
          We are sorry but the page you are looking for does not exist.
        </Paragraph>
        <Anchor href="/" label="Go to homepage" />
      </Box>
    );
  }
}

export default NotFound;
