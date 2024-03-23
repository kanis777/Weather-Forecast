//import {myapi} from './api'
//const apikey=myApi();


var inputcity=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var outputcity = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var feel = document.querySelector('#feel');
const apik="8cf38f003aef072c5c5a47e6fff635f5"

// btn.addEventListener("click",function()
// {   
//             const url='http://api.openweathermap.org/data/2.5/weather?q={inputcity.innerText}&appid=dba131d4a9db288d5647b5d3e7d9b0e6';

//             fetch(url)
//             .then(response=>response.json())

//             .then((data)=>{
//                 console.log(data);
//                 var cityname = data['name']
//                 var descrip = data['weather']['0']['description']
//                 var tempature = data['main']['temp']
//                 //var wndspd = data['wind']['speed']
//                 outputcity.innerHTML=`Weather of <span>${cityname}<span>`
//                 temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
//                 description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//                 //wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
//                 //weatherReport(data)
//             })
//             //document.write(data.coord.lat);
// })

btn.addEventListener('click', function()
{
    cityname='delhi';
    //var urlcast='https://api.open-meteo.com/v1/forecast?latitude=&longitude=${data.coord.log}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m&forecast_days=16'

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8cf38f003aef072c5c5a47e6fff635f5')
  
    fetch(urlcast)
    .then(res => res.json())


  .then(data => 
  {
    var cityname = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    //var wndspd = data['wind']['speed']
    outputcity.innerHTML=`Weather of <span>${cityname}<span>`
    temp.innerHTML = `Temperature: <span>${tempature} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    //wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  .catch(err => alert('You entered Wrong city name'))
})


// function weatherReport(data)
// {
//     var urlcast='https://api.open-meteo.com/v1/forecast?latitude=${data.coord.lat}&longitude=${data.coord.log}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m&forecast_days=16'

//     fetch(urlcast).then(response=>{
//         return response.json()
//     })
//     .then((forecast)=>{
//         console.log(forecast);
        
//     })
// }



