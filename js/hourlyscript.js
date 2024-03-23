
let cityRef=document.getElementById('cityinput');
//document.write(cityRef.value);
let btn=document.getElementById('add');
icon1=document.getElementById('icon1');
icon2=document.getElementById('icon2');
icon3=document.getElementById('icon3');
icon4=document.getElementById('icon4');
icon5=document.getElementById('icon5');
icon6=document.getElementById('icon6');
icon7=document.getElementById('icon7');
icon8=document.getElementById('icon8');


hour1=document.getElementById('1sthour');
temp1=document.getElementById('1sttemp');

hour2=document.getElementById('2ndhour');
temp2=document.getElementById('2ndtemp');

hour3=document.getElementById('3rdhour');
temp3=document.getElementById('3rdtemp');

hour4=document.getElementById('4thhour');
temp4=document.getElementById('4thtemp');

hour5=document.getElementById('5thhour');
temp5=document.getElementById('5thtemp');

hour6=document.getElementById('6thhour');
temp6=document.getElementById('6thtemp');

hour7=document.getElementById('7thhour');
temp7=document.getElementById('7thtemp');

hour8=document.getElementById('8thhour');
temp8=document.getElementById('8thtemp');

hour9=document.getElementById('9thhour');
temp9=document.getElementById('9thtemp');

hour10=document.getElementById('10thhour');
temp10=document.getElementById('10thtemp');

hour11=document.getElementById('11thhour');
temp11=document.getElementById('11thtemp');

hour12=document.getElementById('12thhour');
temp12=document.getElementById('12thtemp');


rain1=document.getElementById('rain1');
vis1=document.getElementById('vis1');
ws1=document.getElementById('ws1');

rain2=document.getElementById('rain2');
vis2=document.getElementById('vis2');
ws2=document.getElementById('ws2');

rain3=document.getElementById('rain3');
vis3=document.getElementById('vis3');
ws3=document.getElementById('ws3');

rain4=document.getElementById('rain4');
vis4=document.getElementById('vis4');
ws4=document.getElementById('ws4');

rain5=document.getElementById('rain5');
vis5=document.getElementById('vis5');
ws5=document.getElementById('ws5');

rain6=document.getElementById('rain6');
vis6=document.getElementById('vis6');
ws6=document.getElementById('ws6');

rain7=document.getElementById('rain7');
vis7=document.getElementById('vis7');
ws7=document.getElementById('ws7');

rain8=document.getElementById('rain8');
vis8=document.getElementById('vis8');
ws8=document.getElementById('ws8');

rain9=document.getElementById('rain9');
vis9=document.getElementById('vis9');
ws9=document.getElementById('ws9');


rain10=document.getElementById('rain10');
vis10=document.getElementById('vis10');
ws10=document.getElementById('ws10');

rain11=document.getElementById('rain11');
vis11=document.getElementById('vis11');
ws11=document.getElementById('ws11');

rain12=document.getElementById('rain12');
vis12=document.getElementById('vis12');
ws12=document.getElementById('ws12');

//functio to fetch weather details from api 
let getWeather=()=>{
    let cityValue=cityRef.value;
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityValue +'?unitGroup-metric&key=Z3H4HUPLRGPSWW5YPBRZ5HXSN&contentType=json',
    {
        method:"GET",
    })
    .then((response) => response.json())
       
    .then(data => {
            console.log(data);
            lat=data.latitude;
            lon=data.longitude;


            if(cityValue.length==0){
                cityRef.innerHTML='<h3>Please Enter a city name</h3>';
            }
            else{
                fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&hourly=temperature_2m,relativehumidity_2m,rain,visibility,windspeed_10m&contentType=json',
                {
                    method:"GET",
                })

                .then((response) => response.json())
            
                .then(dataf => {
                    console.log(dataf);
                    console.log(dataf.hourly.time);

                    for (let i = 0; i < 13; i++) { 
                        console.log(dataf.hourly.time[i],dataf.hourly.rain[i],dataf.hourly.temperature_2m[i],dataf.hourly.visibility[i],dataf.hourly.windspeed_10m[i]);
                        hour=dataf.hourly.time[i].split('T')[1];
                        if(i==0)
                        {
                            hour1.innerHTML=`<h4>${hour}</h4>`
                            temp1.innerHTML=`<h5>${dataf.hourly.temperature_2m[i]}°C</h5>`;
                            rain1.innerText=dataf.hourly.rain[i];
                            vis1.innerText=dataf.hourly.visibility[i];
                            ws1.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==1)
                        {
                            hour2.innerHTML=`<h4>${hour}</h4>`
                            temp2.innerHTML=`<h5>${dataf.hourly.temperature_2m[i]}°C</h5>`;
                            rain2.innerText=dataf.hourly.rain[i];
                            vis2.innerText=dataf.hourly.visibility[i];
                            ws2.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==2)
                        {
                            hour3.innerHTML=`<h4>${hour}</h4>`
                            temp3.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain3.innerText=dataf.hourly.rain[i];
                            vis3.innerText=dataf.hourly.visibility[i];
                            ws3.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==3)
                        {
                            hour4.innerHTML=`<h4>${hour}</h4>`
                            temp4.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain4.innerText=dataf.hourly.rain[i];
                            vis4.innerText=dataf.hourly.visibility[i];
                            ws4.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==4)
                        {
                            hour5.innerHTML=`<h4>${hour}</h4>`
                            temp5.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain5.innerText=dataf.hourly.rain[i];
                            vis5.innerText=dataf.hourly.visibility[i];
                            ws5.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==5)
                        {
                            hour6.innerHTML=`<h4>${hour}</h4>`
                            temp6.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain6.innerText=dataf.hourly.rain[i];
                            vis6.innerText=dataf.hourly.visibility[i];
                            ws6.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==6)
                        {
                            hour7.innerHTML=`<h4>${hour}</h4>`
                            temp7.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain7.innerText=dataf.hourly.rain[i];
                            vis7.innerText=dataf.hourly.visibility[i];
                            ws7.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        else if(i==7)
                        {
                            hour8.innerHTML=`<h4>${hour}</h4>`
                            temp8.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain8.innerText=dataf.hourly.rain[i];
                            vis8.innerText=dataf.hourly.visibility[i];
                            ws8.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        
                        else if(i==8)
                        {
                            hour9.innerHTML=`<h4>${hour}</h4>`
                            temp9.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain9.innerText=dataf.hourly.rain[i];
                            vis9.innerText=dataf.hourly.visibility[i];
                            ws9.innerText=dataf.hourly.windspeed_10m[i];
                        }

                        else if(i==9)
                        {
                            hour10.innerHTML=`<h4>${hour}</h4>`
                            temp10.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain10.innerText=dataf.hourly.rain[i];
                            vis10.innerText=dataf.hourly.visibility[i];
                            ws10.innerText=dataf.hourly.windspeed_10m[i];
                        }
                        
                        else if(i==11)
                        {
                            hour11.innerHTML=`<h4>${hour}</h4>`
                            temp11.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain11.innerText=dataf.hourly.rain[i];
                            vis11.innerText=dataf.hourly.visibility[i];
                            ws11.innerText=dataf.hourly.windspeed_10m[i];
                        }

                        else if(i==12)
                        {
                            hour12.innerHTML=`<h4>${hour}</h4>`
                            temp12.innerHTML=`<h4>${dataf.hourly.temperature_2m[i]}°C</h4>`;
                            rain12.innerText=dataf.hourly.rain[i];
                            vis12.innerText=dataf.hourly.visibility[i];
                            ws12.innerText=dataf.hourly.windspeed_10m[i];
                        }

                        


                      }

                    
                });
            }
    });

    
};


btn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);