import React, { Component } from 'react';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from "grommet/components/Box";

class Main extends Component {
  render() {
    return (
      <App>
        <Split fixed={false} priority='left' flex='right'>
          <Box colorIndex='grey-2' justify='center' align='center' pad='medium'>
            Left Side
          </Box>
          <Box full="vertical" align='center' justify='center' direction="column" pad="medium">
            Right side
          </Box>
        </Split>
      </App>
    );
  }
}

export default Main;
