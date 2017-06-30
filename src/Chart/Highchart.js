import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Highchart extends Component {
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

    this.chart = new Highcharts['Chart'](
      this.refs.chart,
      highChartOption,
    )
  }

  render() {
    return (
      <div ref="chart" />
    )
  }
}

export default Highchart;
