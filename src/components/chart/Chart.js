import React, { Component } from 'react'
import { Pie } from 'react-chartjs';

class Chart extends Component {
  state = {
    chartData: [
      {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 100,
        color:"#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      }
    ]
  }

  render() {
    const { chartData } = this.state;

    return (
      <Pie data={chartData} />
    );
  }
}

export default Chart;