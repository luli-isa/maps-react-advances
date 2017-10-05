import React, { Component } from "react";
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';

class HeaderApp extends Component {

  render() {
    return (
      <Header margin='none' colorIndex='grey-3'>
        <Title margin='small' >
          <Anchor href='/' className='active'>
            Maps-React advances
          </Anchor>
        </Title>
        <Menu responsive={true} inline={true} direction='row'>
          <Menu responsive={true}
            icon={<FavoriteIcon />}
            inline={false}
            label='ReactLeaflet'>
            <Anchor href='/reactleaflet'>
              React-LeafLet offline
            </Anchor>
            <Anchor href='/reactleafletonline'>
              React-LeafLet Online
            </Anchor>
          </Menu>
          <Anchor href='/choropleth'>
            Choropleth
          </Anchor>
        </Menu>
      </Header>
    );
  }
}

export default HeaderApp;
