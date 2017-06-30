import React, { Component } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

class Highstock extends Component {
  componentDidMount() {
    let stockData = [];
    axios.get('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?')
      .then(function (response) {
        stockData = JSON.stringify(response.data.slice(2, response.data.length-2));
        console.log(typeof stockData)
      })
      .catch(function (error) {
        console.log(error);
      });


    const highChartOption = {
      chart: {
        zoomType: 'x',
      },
      title: {
        text: 'USD to EUR exchange rate over time',
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Exchange rate',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: [
        ],
      }],
    };

    this.chart = new Highcharts['Chart'](
      this.refs.stock,
      highChartOption,
    );
  }

  render() {
    return (
      <div ref="stock" />
    )
  }
}

export default Highstock;
