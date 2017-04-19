import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

class City extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
    this.handleSumbit = this.handleSumbit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleUpdate(event) {
    let city = event.target.value
    this.setState(function(){
      return {
        city: city
      }
    })
  }
  handleSumbit() {
    this.props.onSubmitCity(this.state.city)
    this.setState(function(){
      return {
        city: city
      }
    })
  }
  render() {
    return (
      <div
        className='city-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          type='text'
          placeholder='Paris, Madrid'
          onChange={this.handleUpdate}
          value={this.state.city} />
        <button
          type='button'
          style={{margin:10}}
          onClick={this.handleSumbit}>
          Get Weather
        </button>
      </div>
    )
  }
}

City.defaultProps = {
  direction: 'column'
}

City.propTypes = {
  direction: PropTypes.string
}

module.exports = City
