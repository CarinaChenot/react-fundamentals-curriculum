import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

class Forecast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // forecastData = [],
      // loading = false,
    }
  }
  render() {
    return (
      <div>Forecast Component</div>
    )
  }
}

module.exports = Forecast;
