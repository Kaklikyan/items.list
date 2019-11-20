import React, { PureComponent } from 'react';

import * as UI from './App.styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { Main } from '../Main/Main';

export class App extends PureComponent {
  state = {
    isDataLoaded: false,
    data: {}
  }

  componentDidMount = async () => {
    const res = await fetch('./public/data.json');
    const data = await res.json();
    this.setState({
      isDataLoaded: true,
      data,
      activeItem: data.resources[0]
    });
  }

  changeActiveItem = (item) => () => {
    this.setState({ activeItem: item })
  }

  render() {
    const {
      isDataLoaded,
      activeItem,
      data: {
        actions,
        resources
      }
    } = this.state;

    return !isDataLoaded ? 'Loading...' : (
      <UI.Self>
        <UI.GlobalStyle />
        <UI.Header>
          Demo App
        </UI.Header>
        <UI.Wrapper>
          <Sidebar
            items={resources}
            activeItem={activeItem}
            changeActiveItem={this.changeActiveItem}
          />
          <Main 
            item={activeItem}
            actions={actions}
          />
        </UI.Wrapper>
      </UI.Self>
    )
  }
}
