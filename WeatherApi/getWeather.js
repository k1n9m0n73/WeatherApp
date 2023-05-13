////weather api call
const request =require('request');

var getWeather = (lat,lon,callback) => {
    request ({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb270b90829845d92578f3c7a2f16a59`,
        json: true
    },(error,response,body)=>
    {
        if(!error && response.statusCode === 200)
        {
           // console.log(body.main.temp)
           callback(undefined,{
            Temp: body.main.temp
           });
        }
        else {
            //console.log('unable to fetch weather');
            callback('unable to fetch weather');
        }
    
    });
};

module.exports.getWeather = getWeather;
////