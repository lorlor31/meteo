console.log("Connection Parameters");

import { url_data_weather, appid } from "./connections.js";
import { dateName, hourName} from "./dom.js";
import { getLocation, meteoData} from "./functions.js";
import { path} from "./script.js";

export const formatLang = "fr-FR";
export const units = "metric";
export const lang = "fr";
export const NCards = 20;

setInterval(() => {
  let now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  dateName.innerText = now.toLocaleDateString(formatLang, options);
  hourName.innerText = now.toLocaleTimeString(formatLang);
}, 1000);

// DOM
export const temperature = document.querySelector("#temperature");

var latitude = 48.833;
var longitude= 2.326;
export async function initializeLocation() {
  try {
    const position = await getLocation();
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    let url = urlfunction(latitude, longitude, appid);
    meteoData(url, path);
  }
   catch (error) {
    latitude = 26.9156835;
    longitude = -101.4290085;
    console.error(error);
  }
}
initializeLocation();


function urlfunction(p1, p2, p3) {
  return `${url_data_weather}?lat=${p1}&lon=${p2}&appid=${p3}&units=${units}&lang=${lang}`;
}





