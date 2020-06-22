// @ts-ignore

import React, { Component } from 'react'
import moment from 'moment'

import { Line } from 'react-chartjs-2'
import axios from 'axios'
import Endpoints from '../../../api'

class Chart extends Component {
  constructor(props) {
    super(props)
    //props = {ISIN, Years}
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Market Price',
            data: [],
            fill: true,
            lineTension: 1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,0.9)',
            pointHoverBorderWidth: 5,
            pointRadius: 0,
            pointHitRadius: 10
          }
        ]
      }
    }
  }

  componentDidMount() {
    axios
      .post(Endpoints.securityDetails.isinCharts, {
        ISIN: 'INE115A07MJ1',
        // ISIN: 'INE115A07ML7',
        Years: this.props.Years
      })
      .then((response) => {
        console.log(response.data)
        this.setState((state) => {
          return {
            ...state,
            chartData: {
              ...state.chartData,
              labels: response.data.map((item) =>
                moment(item['Date'], 'YYYY-MM-DD').format('Do MMM, YYYY')
              ),
              datasets: [
                {
                  ...state.chartData.datasets[0],
                  data: response.data.map((item) => item['Market_price'])
                }
              ]
            }
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 4,
                    maxRotation: 0,
                    minRotation: 0
                  }
                }
              ]
            }
          }}
        />
      </div>
    )
  }
}

export default Chart
