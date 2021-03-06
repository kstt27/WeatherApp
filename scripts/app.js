const cityForm = document.querySelector('form');
const weatherCard = document.querySelector(".card");
const details = document.querySelector(".details");

const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {

	const cityDets = data.cityDets;
	const weather = data.weather;

	// Destructure preperties
	// const { cityDets, weather } = data;

	// Update details template
	details.innerHTML = `
	<h5 class="my-3">${cityDets.EnglishName}</h5>
		<div class="my-3">${weather.WeatherText}</div>
		<div class="display-4 my-4">
			<span>${weather.Temperature.Metric.Value}</span>
			<span>&deg;C</span>
		</div>
	`;

	// Update icon images
	const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSrc);



	// Update the day/night image
	// Method 1
	// let timeSrc = null;
	// if(weather.IsDayTime){
	// 	timeSrc = "img/day.svg";
	// } else {
	// 	timeSrc = "img/night.svg";
	// }

	// Method 2

	let timeSrc = weather.IsDayTime ? 'mg/day.svg' : 'img/night.svg';

	time.setAttribute('src', timeSrc);

	// remove the d-none class if present since it might not have the class if this is the 2nd time we update
	if(weatherCard.classList.contains('d-none')){
		weatherCard.classList.remove('d-none');
	}
};

const updateCity = async (city) => {

	// getCity finished --> const cityDets

	const cityDets = await getCity(city);
	const weather = await getWeather(cityDets.Key);

	return {
		cityDets: cityDets,
		weather: weather
	};

};

cityForm.addEventListener('submit', e => {
	e.preventDefault();

	// Get city value
	const city = cityForm.city.value.trim();

	cityForm.reset();

	//update UI with the new city
	updateCity(city)
	.then(data => updateUI(data))
	.catch(err => console.log(err));


	localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
	updateCity(localStorage.getItem('city'))
	.then(data => updateUI(data))
	.catch(err => console.log(err));
}

// with class

// const forecast = new Forecast

// cityForm.addEventListener('submit', e => {
// 	e.preventDefault();

// 	// Get city value
// 	const city = cityForm.city.value.trim();

// 	forecast.cityForm.reset();

// 	//update UI with the new city
// 	updateCity(city)
// 	.then(data => updateUI(data))
// 	.catch(err => console.log(err));


// 	localStorage.setItem('city', city);

// });

// if(localStorage.getItem('city')){
// 	forecast.updateCity(localStorage.getItem('city'))
// 	.then(data => updateUI(data))
// 	.catch(err => console.log(err));
// }
