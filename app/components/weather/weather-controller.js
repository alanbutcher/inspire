import WeatherService from "./weather-service.js";

let weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			// console.log(weather);
			let kTemp = weather.main.temp;
			let fTemp = Math.ceil((kTemp * (9 / 5)) - 459.67);
			let template = `
			<div>
			<p class="weather-name">${weather.name}</p>
			<p class="weather-temp">${fTemp}°</p>
			</div>
			`
			//What can you do with this weather object?
			document.getElementById('weather').innerHTML=template
		})
	}
}
