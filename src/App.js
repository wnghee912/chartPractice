import React, { Component } from 'react';
import Highchart from './Chart/Highchart';
import Highmap from './Chart/Highmap';
import Highstock from './Chart/Highstock';

class App extends Component {
  render() {
    return (
      <div>
        <Highchart />
        <Highstock />
      </div>
    );
  }
}

export default App;
