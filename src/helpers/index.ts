import axios from "axios";
import { GeoType } from "../types";

export const getImg = (icon: string | undefined): string => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const metersToMiles = (meters: number): number => {
  return (meters * 0.000621371).toFixed(2) as unknown as number;
};

export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "NE";

  if (deg > 76 && deg <= 105) return "E";
  if (deg > 105 && deg <= 165) return "SE";

  if (deg > 166 && deg <= 195) return "S";
  if (deg > 195 && deg <= 255) return "SW";

  if (deg > 255 && deg <= 285) return "W";
  if (deg > 285 && deg <= 345) return "NW";

  return "N";
};

//fetch forecast with axios
export const getForecast = async (geo: GeoType, units: string = "metric") => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${geo?.lat}&lon=${geo?.lon}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API}`
  );
  return data;
};
