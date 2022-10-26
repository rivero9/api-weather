"use strict";

navigator.geolocation.getCurrentPosition(Coords =>{
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${Coords.coords.latitude}&lon=${Coords.coords.longitude}&limit=5&appid=26cf311a9502e403dcda23125d0aeb4c&lang=es`)
    .then(data => data.json())
    .then(data =>{
        document.getElementById('mr_title_city').textContent = `${data[0].name}`;
        document.getElementById('city')
            .textContent = `${data[0].name}, ${data[0].state.split(' ')[0]}, ${data[0].country}...`;
    });
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Coords.coords.latitude}&lon=${Coords.coords.longitude}&appid=26cf311a9502e403dcda23125d0aeb4c&lang=es&units=metric`)
    .then(data => data.json())
    .then(data =>{
        document.getElementById('info_ico')
            .src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        const temp = Math.round(data.main.temp);
        document.getElementById('temp').textContent = `${temp}°`;
        document.getElementById('mr-temp').innerHTML = 
            `${temp}° (${Math.round(data.main.temp_min)}° / ${Math.round(data.main.temp_max)}°)`;
        document.getElementById('mr-temp-2').innerHTML = ` ${Math.round(data.main.feels_like)}°`;
        document.getElementById('description').innerHTML = ` ${data.weather[0].description}`;
        document.getElementById('humidity').innerHTML = `<b>humedad</b>: ${data.main.humidity}%`;
        document.getElementById('mr-humidity').innerHTML = `${data.main.humidity}%`;
        document.getElementById('clouds').innerHTML = `<b>nubes</b>: ${data.clouds.all}%`;
        document.getElementById('mr-clouds').innerHTML = `${data.clouds.all}%`;
        document.getElementById('mr-wind-speed')
            .innerHTML = `a ${(data.wind.speed*3.6).toString().substring(0,3)}kph`;
        document.getElementById('mr-wind-direction').innerHTML = `${data.wind.deg}°`;
        document.getElementById('mr-sea-level').innerHTML = `a ${data.main.pressure}hpa`;
        document.getElementById('mr-visibility').innerHTML = `a ${data.visibility}klh`;
        document.getElementById('sec').setAttribute('id',`w${data.weather[0].icon.substring(0,2)}`);
    })
    .then(()=> document.body.removeChild(document.getElementById('get-data')))
    .catch(e=>{
        console.log(e);
        document.getElementById('get-data').removeChild(document.getElementById('get-data_loader'));
        document.getElementById('get-data_title')
            .textContent = `Hubo un error, por favor comprueba tu conexión a internet`;
    });
});
// time
const getTime = repeat =>{
    const dt = new Date();
    const time = document.getElementById('time');
    const hour = dt.getHours() > 12 ? [dt.getHours()-12,'PM'] : [dt.getHours(),'AM'];
    const minute = dt.getMinutes() >= 10 ? dt.getMinutes() : `0${dt.getMinutes()}`;
    time.textContent = `${hour[0]}:${minute} ${hour[1]}`;
    if (repeat){
        const day = ['Lun','Mar','Mier','Jue','Vie','Sab','Dom'];
        const month = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        const input = document.getElementById('date');
        input.textContent = `${day[dt.getDay()-1]} ${dt.getDate()} ${month[dt.getMonth()]} ${dt.getFullYear()}`;
    }
    setInterval(()=>{
        getTime(false);
    },5000);
}
getTime(true);

// ideas
// --layout ~/
// --load ~/
// --cargar desde el head
// icon
// --proteger api_key