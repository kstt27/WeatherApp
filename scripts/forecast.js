const key = "Yo5CvJWAsJUdmCs2rhwvHyfy58oGNXjM";


// Get weather info
const getWeather = async (datakey) => {
	const base = "https://dataservice.accuweather.com/currentconditions/v1/";
	const query = `${datakey}?apikey=${key}`;
	// await this promise until the result is out
	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};



// Get city info
const getCity = async (city) => {
	const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};





// How to do it by class

// class Forecast{
// 	constructor(){
// 		this.key = "Yo5CvJWAsJUdmCs2rhwvHyfy58oGNXjM";
// 		this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
// 		this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
// 	}
// 	async updateCity(city){
// 		const cityDets = await this.getCity(city);
// 		const weather = await this.getWeather(cityDets.Key);

// 		return {
// 		cityDets: cityDets,
// 		weather: weather
// 	};
// 	}
// 	async getCity(city){
// 		const query = `?apikey=${this.key}&q=${city}`;

// 		const response = await fetch(this.cityURI + query);
// 		const data = await response.json();

// 		return data[0];
// 	}
// 	async getWeather(datakey){
		
// 		const query = `${datakey}?apikey=${this.key}`;
// 	// await this promise until the result is out
// 		const response = await fetch(this.weatherURI + query);
// 		const data = await response.json();

// 	return data[0];

// 	}
// }


