interface CurrentWeather {
    temperature: number;
    // Add other fields as needed
  }
  
export function useTemp(): Promise<number> {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=12.8601&longitude=77.653&current_weather=true";
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const currentWeather = data.current_weather as CurrentWeather;
        return currentWeather.temperature;
      })
      .catch(error => {
        console.log(error);
        return -1; // or throw an error, depending on your use case
      });
  }