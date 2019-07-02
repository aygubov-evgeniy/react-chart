import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Doughnut } from 'react-chartjs';

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
    ],

    chartOptions: {
      segmentShowStroke : false,
      percentageInnerCutout : 90
    }
  }

  render() {
    const { chartOptions } = this.state;
    const { chartData } = this.props;

    return (
      <Doughnut data={chartData} options={chartOptions} width="225" height="225" />
    );
  }
}

// Redux
const mapStateToProps = (state, ownProps) => ({
  chartData: state.chartData
})

export default connect(mapStateToProps, null)(Chart);