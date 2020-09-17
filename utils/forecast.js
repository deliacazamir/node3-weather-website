const request = require('postman-request');

//+ '&units=f'  --- optional for url
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f9d791954e27877b7de0478b470e703c&query='+ 
        latitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ ' throughout the day. '+ 
            'It is currently ' + body.current.temperature + 'C degrees out, but if feels like ' +
            body.current.feelslike + '. Humidity is currently: ' + body.current.humidity + '\n' +
            'There are ' + body.current.precip + '% chance for precipitations.');
        }
    })
};

module.exports = forecast;