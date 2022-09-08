const APIKEY = "0278fa698984399b7e5da40733fe7c69"

function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lng = position.coords.longitude;
 const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
 fetch(URL).then(respone => respone.json()).then(data => {
  
    const city = document.querySelector("#weather span:first-child")
    const weather = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = ` / ${Math.floor(data.main.temp)}°`
    
  });
}

function onGeoError(){
   alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)