import React, { Component } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';
// var ReactHighmaps = require('react-highcharts/ReactHighmaps.src');


class Highmap extends Component {
  componentDidMount() {

    const highChartOption = {
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      chart: {
        type: 'bar',
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4],
      }, {
        name: 'John',
        data: [5, 7, 3],
      }],
    };

    // console.log('ReactHighmaps')

    this.chart = new Highcharts['chart'](
      this.refs.map,
      highChartOption
    )

    console.log('Highcharts', Highcharts)


  }

  render() {
    return (
      <div ref='map' />

    )
  }
}

export default Highmap;
