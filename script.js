// search->rapidapi.com/hub->weather->by ninja api->javascript->fetch.
document.addEventListener('DOMContentLoaded', () => {
	const cityNameElement = document.getElementById('cityName');
	const cityInput = document.getElementById('cityInput');
	const submitBtn = document.getElementById('submitBtn');
	const apiKey = 'd6cced61e1mshe977853b667b80bp1a1adajsnc522e4a49ac4';
	const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey,//'d6cced61e1mshe977853b667b80bp1a1adajsnc522e4a49ac4',
			'X-RapidAPI-Host': apiHost   //'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	const getWeather = (city) => {
		cityNameElement.innerHTML = city;

		async function fetchData(city) {
			try {
				const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
				const response = await fetch(url, options);



				if (!response.ok) {
					const errorMessage = await response.json();
					throw new Error(`Error ${response.status}: ${errorMessage.error}`);
				}


				const result = await response.json(); // Parse the JSON response
				console.log(result);


				const cloud_pct = result.cloud_pct;
				const temp = result.temp;
				const temp2 = result.temp;
				const feels_like = result.feels_like;
				const humidity = result.humidity;
				const humidity2 = result.humidity;
				const min_temp = result.min_temp;
				const max_temp = result.max_temp;
				const wind_speed = result.wind_speed;
				const wind_speed2 = result.wind_speed;
				const wind_degrees = result.wind_degrees;
				const sunrise = result.sunrise;
				const sunset = result.sunset;

				// Update the corresponding HTML elements with the fetched data
				const cloud_pctElement = document.getElementById('cloud_pct');
				if (cloud_pctElement) {
					cloud_pctElement.innerHTML = cloud_pct;
				}

				const tempElement = document.getElementById('temp');
				if (tempElement) {
					tempElement.innerHTML = temp;
				}


                const temp2Element = document.getElementById('temp2');
				if (temp2Element) {
					temp2Element.innerHTML = temp2;
				}

				const feels_likeElement = document.getElementById('feels_like');
				if (feels_likeElement) {
					feels_likeElement.innerHTML = feels_like;
				}

				const humidityElement = document.getElementById('humidity');
				if (humidityElement) {
					humidityElement.innerHTML = humidity;
				}

				
				const humidity2Element = document.getElementById('humidity2');
				if (humidity2Element) {
					humidity2Element.innerHTML = humidity2;
				}

				const min_tempElement = document.getElementById('min_temp');
				if (min_tempElement) {
					min_tempElement.innerHTML = min_temp;
				}

				const max_tempElement = document.getElementById('max_temp');
				if (max_tempElement) {
					max_tempElement.innerHTML = max_temp;
				}

				const wind_speedElement = document.getElementById('wind_speed');
				if (wind_speedElement) {
					wind_speedElement.innerHTML = wind_speed;
				}
                
				const wind_speed2Element = document.getElementById('wind_speed2');
				if (wind_speed2Element) {
					wind_speed2Element.innerHTML = wind_speed2;
				}

				const wind_degreesElement = document.getElementById('wind_degrees');
				if (wind_degreesElement) {
					wind_degreesElement.innerHTML = wind_degrees;
				}

				const sunriseElement = document.getElementById('sunrise');
				if (sunriseElement) {
					sunriseElement.innerHTML = sunrise;
				}

				const sunsetElement = document.getElementById('sunset');
				if (sunsetElement) {
					sunsetElement.innerHTML = sunset;
				}
				// Update the corresponding HTML elements with the fetched data
            // ... (Rest of the code remains unchanged) ...

			} catch (error) {
				console.error("Error fetching data:", error.message);
				console.error("Error response:", error.response);
			}
		}

		// Call the async function to start fetching data
		fetchData(city);
	}


	submitBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const city = cityInput.value.trim(); // Get the input value and trim any extra spaces
		if (city !== '') {
			getWeather(city);
		}
		else {
			alert('Please enter a valid city name.');
		}
	});



	// Call getWeather initially with a default city (e.g., "Delhi")
	getWeather("Lohaghat");
	//getWeather("Mumbai");
});

