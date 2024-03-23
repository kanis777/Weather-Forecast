let cityRef=document.getElementById('cityinput');
//document.write(cityRef.value);
let btn=document.getElementById('add');
let outputcity = document.getElementById('cityoutput');
let desc = document.getElementById('description');
let temp = document.getElementById('temp');
let feel = document.getElementById('feel');

let aiq= document.getElementById('airquality');
let windspd = document.getElementById('wind');
let humid = document.getElementById('humidity');
let vis = document.getElementById('visibility');
let press = document.getElementById('pressure');

const apik="8cf38f003aef072c5c5a47e6fff635f5";
let cityValue=cityRef.value;

outputcity.innerText=cityValue;

let umbrella= document.getElementById('umbrella');
let clothing = document.getElementById('clothing');
let outdoors = document.getElementById('outdoors');
let uvindex = document.getElementById('uvindex');


function measureuv(uvind){
        if(uvind<=2){
            uvindex.innerText="Low";
        }
        else if(uvind>2 && uvind<=5){
            uvindex.innerText="Moderate";
        }
        else if(uvind>5 && uvind<=7){
            uvindex.innerText="High";
        }
        else if(uvind>7 && uvind<=10)
        {
            uvindex.innerText="Very High";
        }
        else{
            uvindex.innerText="Extreme";
        }
}

function measureprec(prec){
    //prec in in
    if(prec<=0.098){
        umbrella.innerText="No need";
    }
    else if(prec>0.098 && (prec<=0.30 || prec==0.39)){
       umbrella.innerText="Needed";
    }
    else if(umbrella>0.30 && umbrella<=2.0){
       umbrella.innerText="Needed";
    }
    else if(umbrella>2.0)
    {
        umbrella.innerText="Needed";
    }
}

function measureout(temp){
    //prec in in
    if(temp>=60){
        outdoors.innerText="Stay Indoors";
        clothing.innerText="Shorts";
    }
    else if(temp>=45 && temp<=60){
        outdoors.innerText="Jogging";
        clothing.innerText="Shorts";
    }
    else if(temp>=35 && temp<45){
        outdoors.innerText="Cycling";
        clothing.innerText="Coat & a hat";

    }
    else if(temp<35)
    {
        outdoors.innerText="Walking";
        clothing.innerText="Warm coat,hat & gloves";

    }
}

//uvindex suggestions
function suggestions(data,cityValue)
{
        let today=data.currentConditions;
        var uvind=today.uvindex;
        var prec=today.precip;
        var temp=today.temp;
        measureuv(uvind);
        measureprec(prec);
        measureout(temp);
}



//functio to fetch weather details from api 
let getWeather=()=>{
    let cityValue=cityRef.value;
    //cityValue="delhi";
    if(cityValue.length==0){
        cityRef.innerHTML='<h3>Please Enter a city name</h3>';
    }
    else{
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityValue +'?unitGroup-metric&key=Z3H4HUPLRGPSWW5YPBRZ5HXSN&contentType=json',
        {
            method:"GET",
        })

        .then((response) => response.json())
        // let url='https://api.openweathermap.org/data/2.5/weather?q=' + cityValue + '&appid=dba131d4a9db288d5647b5d3e7d9b0e6&units=metric';
        // fetch(url).then((resp) => resp.json()).
        //
        .then(data => {
            console.log(data);
            console.log(data.currentConditions.icon);
            console.log(data.currentConditions.conditions);
            console.log(data.description);
            console.log(data.address);
            console.log(data.currentConditions.windspeed);
            console.log(data.currentConditions.humidity);
            console.log(data.currentConditions.visibility);
            console.log(data.currentConditions.pressure);

            var cityname = data.address;
            var descrip = data.description;

            var tempature = data.currentConditions.temp;
            var feelslike=data.currentConditions.feelslike;

           
            outputcity.innerHTML=`Weather of <span>${cityname}</span>`
            desc.innerText = descrip
            temp.innerHTML = `<span>${tempature} °C</span>`
            feel.innerHTML=`Feels Like: <span>${feelslike} °C</span>`

            //aiq.innerHTML=`<span>${cityname}</span>`
            var ws = data.currentConditions.windspeed;
            var hm = data.currentConditions.humidity;
            var vs = data.currentConditions.visibility;
            var ps=data.currentConditions.pressure;
            windspd.innerHTML = `<span>${ws} km/hr</span>`
            humid.innerHTML = `<span>${hm} %</span>`
            vis.innerHTML=`<span>${vs} km</span>`
            press.innerHTML = `<span>${ps} mb</span>`

            suggestions(data,cityValue);


        });
    }
};






btn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);


