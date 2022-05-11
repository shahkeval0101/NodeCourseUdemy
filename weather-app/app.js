//To run node app.js mumbai
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//weatherstack api

// const url = "http://api.weatherstack.com/current?access_key=f53ed14bb7d8fbe24f042c5e6d1dc89b&query=los%20Angeles&units=f"

// request({url:url, json:true},(error, response)=>{
//   if(error){//for lower level like internet connection not working
//     console.log("Unable to connect to weather API")
//   }else if(response.body.error){
//     console.log("Unable to find location", response.body.error)
//   }  
//   else{
//     const data = response.body
//     console.log(data.current.weather_descriptions[0] + ". It is currently "+ data.current.temperature + " degrees. It feels like " + data.current.feelslike + " out there" )
//   }
    
// })

// mapbox api
// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/?access_token=pk.eyJ1Ijoia2V2YWxzaGFoOTA5MDkiLCJhIjoiY2wyeXZraWFkMDAzNjNpcDljejlndGh2ZiJ9.VYBBaUd8U--t4zb4NLyGdw&limit=1"
// request({url:geoCodeUrl},(error, response)=>{
// if(error){
//   console.log("Unable to connect to location API")
// }else if(JSON.parse(response.body).message){
//   console.log("Unable to Geocode the the location",response.body)
// }
// else{
//   const data = JSON.parse(response.body)
//   const longitude = data.features[0].center[0]
//   const latitude = data.features[0].center[1]
//   console.log(longitude, latitude)
// }  
// })



	//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)









//42.3605, -71.0596
//data.latitude, data.longitude



// console.log(process.argv)
//providing default value so that if geocode and error occurs so we are not destructuring undefined
if(process.argv[2]){
    const location = process.argv[2]
  geocode(location,(error, {latitude, longitude, location} = {})=>{
    if(error){
       return console.log(error)
    }
  
forecast(latitude, longitude, (error, forecastData) => {
    if(error){
      return console.log(error)
    }
    console.log(location)
    console.log('Data', forecastData)
  })
    
  })  
  }
else{
  console.log("Provide location")
}