console.log("Connection Functions");

import { card } from "./dom.js";

// Connexions - urls et clés API
import { url_data_forecast, url_icon, appid } from "./connections.js";

// Paramètres - variables globales
import { temperature, formatLang, units, lang, NCards } from "./parameters.js";

// meteoData fetchs the data from the OpenWeather API 
// then create tinyCard elements to append to #list element
export async function meteoData(p1,p2) {
  // At first fetch the forecast for now
  const response = await fetch(p1);
  const data = await response.json();
  const iconAdd = data.weather[0].icon;
  card.style.backgroundImage = `url(../media/img/${p2}/${iconAdd}.png)`;
  // card.style.backgroundImage = `url(./assets/media/img/${p2}/${iconAdd}.png)`;
  cityName.innerText = data.name;
  weather.innerText = data.weather[0].description;
  temperature.innerText = `${Math.floor(data.main.temp)}°`;
  // Secondary, fetch the forecast for the next days
  const response2 = await fetch(
    `${url_data_forecast}?id=${data.id}&appid=${appid}&units=${units}&lang=${lang}`
  );
  const data2 = await response2.json();
  // Loop to create each tinyCard with weather infos and append it to #list element
  for (let i = 0; i <= NCards - 1; i++) {
    const date = new Date(data2.list[i].dt * 1000);
    const dayName = date.toLocaleDateString(formatLang, { weekday: "short" });
    const day = date.getDate();
    const hour = date.getHours();

    list.innerHTML += `
        <li class="tinyCard colCenter digital">
            <p class="dateMiniCard">${dayName}${day}</p>
            <img src="${url_icon}${data2.list[i].weather[0].icon}.png">
            ${hour}h
            ${Math.floor(data2.list[i].main.temp)}°C
        </li>`;
  }
}

// TODO get the current position
export function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      latitude = 26.9156835;
      longitude = -101.4290085;
      reject("Geolocation is not supported by this browser.");
    }
  });
}

