import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import City from './City'
import Forecast from './Forecast'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
            <Route render={function(props) {
                return (
                  <div className='navbar'>
                    <h1>Clever Title</h1>
                      <City
                        direction='row'
                        onSubmitCity={function(city) {
                          props.history.push({
                            pathname:'forecast',
                            search: '?city=' + city
                          })
                        }}
                      />
                  </div>
                )
              }} />

          <Route exact path='/' render={(props) => (
            <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
              <h1 className='header'>Enter a City</h1>
              <City
                direction='column'
                onSubmitCity={ (city) => {
                  props.history.push({
                    pathname:'forecast',
                    search: '?city=' + city
                  })
                }}
                />
            </div>
          )}/>
        <Route path='/forecast' component={Forecast} />
        </div>
      </BrowserRouter>
      )
  }
}

module.exports = App;
