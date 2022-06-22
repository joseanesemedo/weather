import { DateTime } from "luxon";

const API_KEY = "1deddd564f26d5846aa8a73399dc28d1";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// call APIs
// searchParams obj that will convert to query
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main, description, icon, id } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    main,
    description,
    icon,
    id,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let {
    timezone,
    current: { uvi },
    daily,
    hourly,
  } = data;

  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
      id: d.weather[0].id,
      detail: d.weather[0].main,
    };
  });

  hourly = hourly.slice(1, 12).map((d) => {
    return {
      // hh:mm a
      title: formatToLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      id: d.weather[0].id,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, current: { uvi }, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// convert to timezone
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy'|Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
