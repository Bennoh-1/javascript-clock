const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1e59ceb17msh21fefcef3f4ab23p153e00jsn7b149bb10eba',
		'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
	}
};

fetch('https://world-clock.p.rapidapi.com/json/utc/now', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log("okay")