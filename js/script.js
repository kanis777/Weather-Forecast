const temp=document.getElementById("temp");
date=document.getElementById("datetime");


uvindex=document.querySelector(".uvindex");
uvtext=document.querySelector(".uvtext");
windspeed=document.querySelector(".windspeed");
sunrise=document.querySelector(".sunrise");
sunset=document.querySelector(".sunset");
humidity=document.querySelector(".humidity");
humiditystatus=document.querySelector(".humiditystatus");
visibilty=document.querySelector(".visibilty")
visibiltystatus=document.querySelector(".visibiltystatus")
airquality=document.querySelector(".airquality");
airqualitystatus=document.querySelector(".airqualitystatus");

let currentcity="";
let currentunit="C";
let hourlyorweekly="";

function getDateTime(){
    let now=new Date();
    hour=now.getHours(),min=now.getMinutes();

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    hour=hour%12;
    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }

    let daystring=days[now.getDay()];
    return '${daystring},${hour}:${minute}';
}


date.innerText=getDatetIme();
//update time
setInterval(() => {
    date.innerText=getDatetIme();
},1000);

//fetch api

function getpublic(){
    fetch("https://geolocation-db.com/json/",{
        method:"GET",
    })
    .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            currentcity=data.currentCity;
            getweatherdata(data.city,currentunit,hourlyorweekly);
    })
}

getpublic();

function  getweatherdata(city,unit,hourlyorweekly){
    //const apikey="Z3H4HUPLRGPSWW5YPBRZ5HXSN";
    fetch(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup-metric&key=Z3H4HUPLRGPSWW5YPBRZ5HXSN&contentType=json',
        {
            method:"GET",
        }
        )
        
        .then((response)=>response.json())
        .then((data)=>
        {
            let today=data.currentConditions;
            //document.write(today.temp);
            if (unit = "c") {
                temp.innerText = today.temp;
            } 
            else {
                temp.innerText = celciusToFahrenheit (today.temp);
            }
            //currentlocation.innerText = data.resolvedAdd
            uvindex.innerText=today.uvindex;
            windSpeed.innerText=today.windspeed;
            humidity.innerText=today.humidity + "%";
            visibility.innerText=today.visibility;
            airQuality.innerText=today.winddir;
            measureuv(today.uvindex);
            measurehum(today.humidity);
            measurevis(today.visibilty);
            measureairq(today.airquality);
        });
    }


function celciusToFahrenheit (temp) {
    return ((temp*9) / 5 + 32).toFixed(1);
}

function measureuv(uvind)
{
    if(uvind<=2){
        uvtext.innerText="Low";
    }
    else if(uvind>2 && uvind<=5){
        uvtext.innerText="Moderate";
    }
    else if(uvind>5 && uvind<=7){
        uvtext.innerText="High";
    }
    else if(uvind>7 && uvind<=10)
    {
        uvtext.innerText="Very High";
    }
    else{
        uvtext.innerText="Extreme";
    }
}

function measurehum(humid)
{
    if(humid<=20){
        humiditystatus.innerText="Dry";
    }
    else if(humid>20 && humid<=60){
        humiditystatus.innerText="Healthy Level";
    }
    else if(humid>60){
        humiditystatus.innerText="High";
    }
    else
    {
        uvtext.innerText="Very High";
    }
}


function measureairq(airq){
    if(airq<=50)
    {
        airqualitystatus.innerText="Good";
    }else if(airq>50 && airq<=100)
    {
        airqualitystatus.innerText="Moderate";
    }else if(airq>100 && airq<=150){
        airqualitystatus.innerText="Unhealthy for Sensitive Groups";
    }
    else if(airq>150 && airq<=200)
    {
        airqualitystatus.innerText="Unhealthy";
    }
    else if(airq>200 && airq<=250)
    {
        airqualitystatus.innerText="Very Unhealthy";
    }
    else{
        airqualitystatus.innerText="Hazardous";
    }
}