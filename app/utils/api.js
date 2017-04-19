import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKEY = '9e8150c9d6fbf87d678d2cf7f7a2c00a'

function getCurrentWeather(city) {
    return axios.get(_baseURL + 'weather?q=' + city + '&type=accurate&APPID=' + _APIKEY)
    .then(function(currentWeatherData) {
        return currentWeatherData.data
    })
}

function getForecast(city) {
    console.log(city);
    return axios.get(_baseURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + _APIKEY + '&cnt=5')
    .then(function(forecastData) {
        return forecastData.data
    })
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
}
