const request = require('request'); 
var geocodeAddress =(address,callback) => {
var encodeAddress = encodeURIComponent(address); 
request ({
url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`, 
json:true 
},(error,response,body)=> {
if(error) 
{
callback('Unable to conncet google Servers');
}
else if(body.status === 'ZERO_RESULTS')
{
callback('Unable to find address');
}
else if(body.status === 'OK')
{
callback(undefined,{ 
address: body.results[0].formatted_address, 
latitude: body.results[0].geometry.location.lat, 
longitude: body.results[0].geometry.location.lng 
});
} 
}); 
} 
module.exports.getAddress = geocodeAddress;