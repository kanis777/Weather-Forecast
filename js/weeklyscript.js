let cityRef=document.getElementById('cityinput');
//document.write(cityRef.value);
let btn=document.getElementById('add');
let outputcity1= document.getElementById('cityoutput1');

let temp1 = document.getElementById('temp1');
let maxtemp1= document.getElementById('maxtemp1');
let mintemp1 = document.getElementById('mintemp1');
let avghumid1 = document.getElementById('avghumid1');
let aiqco1 = document.getElementById('aiqco1');
let aiqno21 = document.getElementById('aiqno21');
let aiqo31= document.getElementById('aiqo31');
let aiqso21 = document.getElementById('aiqso21');
let desc1 = document.getElementById('description1');


let temp2 = document.getElementById('temp2');
let maxtemp2= document.getElementById('maxtemp2');
let mintemp2 = document.getElementById('mintemp2');
let avghumid2 = document.getElementById('avghumid2');
let aiqco2 = document.getElementById('aiqco2');
let aiqno22 = document.getElementById('aiqno22');
let aiqo32= document.getElementById('aiqo32');
let aiqso22 = document.getElementById('aiqso22');
let desc2 = document.getElementById('description2');
let outputcity2= document.getElementById('cityoutput2');

let temp3= document.getElementById('temp3');
let maxtemp3= document.getElementById('maxtemp3');
let mintemp3 = document.getElementById('mintemp3');
let avghumid3 = document.getElementById('avghumid3');
let aiqco3 = document.getElementById('aiqco3');
let aiqno23 = document.getElementById('aiqno23');
let aiqo33= document.getElementById('aiqo33');
let aiqso23 = document.getElementById('aiqso23');
let desc3 = document.getElementById('description3');
let outputcity3= document.getElementById('cityoutput3');



let temp4 = document.getElementById('temp4');
let maxtemp4= document.getElementById('maxtemp4');
let mintemp4 = document.getElementById('mintemp4');
let avghumid4 = document.getElementById('avghumid4');
let aiqco4 = document.getElementById('aiqco4');
let aiqno24 = document.getElementById('aiqno24');
let aiqo34= document.getElementById('aiqo34');
let aiqso24 = document.getElementById('aiqso24');
let desc4 = document.getElementById('description4');
let outputcity4= document.getElementById('cityoutput4');


let temp5 = document.getElementById('temp5');
let maxtemp5= document.getElementById('maxtemp5');
let mintemp5 = document.getElementById('mintemp5');
let avghumid5 = document.getElementById('avghumid5');
let aiqco5 = document.getElementById('aiqco5');
let aiqno25 = document.getElementById('aiqno25');
let aiqo35= document.getElementById('aiqo35');
let aiqso25 = document.getElementById('aiqso25');
let desc5 = document.getElementById('description5');
let outputcity5= document.getElementById('cityoutput5');

let temp6 = document.getElementById('temp6');
let maxtemp6= document.getElementById('maxtemp6');
let mintemp6 = document.getElementById('mintemp6');
let avghumid6 = document.getElementById('avghumid6');
let aiqco6 = document.getElementById('aiqco6');
let aiqno26 = document.getElementById('aiqno26');
let aiqo36= document.getElementById('aiqo36');
let aiqso26 = document.getElementById('aiqso26');
let desc6 = document.getElementById('description6');
let outputcity6= document.getElementById('cityoutput6');


let temp7 = document.getElementById('temp7');
let maxtemp7= document.getElementById('maxtemp7');
let mintemp7 = document.getElementById('mintemp7');
let avghumid7 = document.getElementById('avghumid7');
let aiqco7 = document.getElementById('aiqco7');
let aiqno27 = document.getElementById('aiqno27');
let aiqo37= document.getElementById('aiqo37');
let aiqso27 = document.getElementById('aiqso27');
let desc7 = document.getElementById('description7');
let outputcity7= document.getElementById('cityoutput7');


let getWeather=()=>{
    let cityValue=cityRef.value;
    fetch('http://api.weatherapi.com/v1/forecast.json?q='+cityValue+'&days=7&aqi=yes&alerts=yes&key=9e00ec3ea30b4ff9a1e84931231803',
    {
        method:"GET",
    })
    .then((response) => response.json()) 
       
    .then(data => {
            console.log(data);
            console.log(data.forecast.forecastday[2]);
            for (let i = 0; i < 7; i++) { 
                //console.log(data.forecast.forecastday[i]);
                let forc=data.forecast.forecastday[i];

                if(i==0){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity1.innerText=cityValue;
                    temp1.innerText=forc.day.avgtemp_c;
                    maxtemp1.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp1.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid1.innerText=forc.day.avghumidity;
                    aiqco1.innerText=Math.round(aiq.co);
                    aiqno21.innerText=Math.round(aiq.no2);
                    aiqo31.innerText=Math.round(aiq.o3);
                    aiqso21.innerText=Math.round(aiq.so2);
                    desc1.innerText=forc.day.condition.text;
                }

                if(i==1){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity2.innerText=cityValue;
                    temp2.innerText=forc.day.avgtemp_c;
                    maxtemp2.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp2.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid2.innerText=forc.day.avghumidity;
                    aiqco2.innerText=Math.round(aiq.co);
                    aiqno22.innerText=Math.round(aiq.no2);
                    aiqo32.innerText=Math.round(aiq.o3);
                    aiqso22.innerText=Math.round(aiq.so2);
                    desc2.innerText=forc.day.condition.text;

                }

                if(i==2){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity3.innerText=cityValue;
                    temp3.innerText=forc.day.avgtemp_c;
                    maxtemp3.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp3.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid3.innerText=forc.day.avghumidity;
                    aiqco3.innerText=Math.round(aiq.co);
                    aiqno23.innerText=Math.round(aiq.no2);
                    aiqo33.innerText=Math.round(aiq.o3);
                    aiqso23.innerText=Math.round(aiq.so2);
                    desc3.innerText=forc.day.condition.text;

                }

                if(i==3){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity4.innerText=cityValue;
                    temp4.innerText=forc.day.avgtemp_c;
                    maxtemp4.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp4.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid4.innerText=forc.day.avghumidity;
                    aiqco4.innerText=Math.round(aiq.co);
                    aiqno24.innerText=Math.round(aiq.no2);
                    aiqo34.innerText=Math.round(aiq.o3);
                    aiqso24.innerText=Math.round(aiq.so2);
                    desc4.innerText=forc.day.condition.text;

                }

                if(i==4){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity5.innerText=cityValue;
                    temp5.innerText=forc.day.avgtemp_c;
                    maxtemp5.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp5.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid5.innerText=forc.day.avghumidity;
                    aiqco5.innerText=Math.round(aiq.co);
                    aiqno25.innerText=Math.round(aiq.no2);
                    aiqo35.innerText=Math.round(aiq.o3);
                    aiqso25.innerText=Math.round(aiq.so2);
                    desc5.innerText=forc.day.condition.text;

                }

                if(i==5){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity6.innerText=cityValue;
                    temp6.innerText=forc.day.avgtemp_c;
                    maxtemp6.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp6.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid6.innerText=forc.day.avghumidity;
                    aiqco6.innerText=Math.round(aiq.co);
                    aiqno26.innerText=Math.round(aiq.no2);
                    aiqo36.innerText=Math.round(aiq.o3);
                    aiqso26.innerText=Math.round(aiq.so2);
                    desc6.innerText=forc.day.condition.text;

                }

                if(i==6){
                    //console.log(forc.day.maxtemp_c);
                    let aiq=forc.day.air_quality;
                    outputcity7.innerText=cityValue;
                    temp7.innerText=forc.day.avgtemp_c;
                    maxtemp7.innerHTML=`<span>${forc.day.maxtemp_c} °C</span>`
                    mintemp7.innerHTML=`<span>${forc.day.mintemp_c} °C</span>`
                    avghumid7.innerText=forc.day.avghumidity;
                    aiqco7.innerText=Math.round(aiq.co);
                    aiqno27.innerText=Math.round(aiq.no2);
                    aiqo37.innerText=Math.round(aiq.o3);
                    aiqso27.innerText=Math.round(aiq.so2);
                    desc7.innerText=forc.day.condition.text;

                }

            }
    });

            
    
};
// 4e8a2adae7ba919346b9aa71c8b21141
// http://api.weatherstack.com/forecast
//     ? access_key = 4e8a2adae7ba919346b9aa71c8b21141
//     & query = New York
//     & forecast_days = 1
//     & hourly = 1

btn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);