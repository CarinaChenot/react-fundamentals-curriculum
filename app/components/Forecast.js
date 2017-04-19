import React from 'react'
import queryString from 'query-string'
import api from '../utils/api'

class Forecast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecastData: [],
      loading: false,
    }
    this.makeRequest = this.makeRequest.bind(this)
  }
  componentDidMount() {
    let city = queryString.parse(this.props.location.search).city
    this.makeRequest(city)
  }
  makeRequest(city) {
    this.setState ( () => {return {
      loading: true
    }})
    api.getCurrentWeather(city)
      .then(res => {
        console.log(res)
        this.setState( function() {
          return {
            loading: false
          }
        })
      }).bind(this)
  }
  render() {
    return this.state.loading === true ? <div>loading</div> : <div>Forecast Component</div>
  }
}

module.exports = Forecast;
