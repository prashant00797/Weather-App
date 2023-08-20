const APIKey = "11adffcccf116d12912ce13bd9665fde";

export const GetWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
