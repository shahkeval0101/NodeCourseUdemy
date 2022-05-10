const request = require('request')
//weatherstack api

// const url = "http://api.weatherstack.com/current?access_key=f53ed14bb7d8fbe24f042c5e6d1dc89b&query=New%20York&units=f"

// request({url:url, json:true},(error, response)=>{
//     const data = response.body
//     console.log(data.current.weather_descriptions[0] + ". It is currently "+ data.current.temperature + " degrees. It feels like " + data.current.feelslike + " out there" )
// })

// mapbox api
var address = 'Indore'; // Sample data
const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoia2V2YWxzaGFoOTA5MDkiLCJhIjoiY2wyeXZraWFkMDAzNjNpcDljejlndGh2ZiJ9.VYBBaUd8U--t4zb4NLyGdw'&limit=1'"
request({url:geoCodeUrl , json:true},(error, response)=>{
    const data = response
    // console.log(response)
    console.log("Error", error)
    // console.log(response)
})