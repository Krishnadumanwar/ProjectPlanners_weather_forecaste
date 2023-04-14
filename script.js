const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64c0fd41fdmsh1f8e4fe60179910p115118jsnf0759886eb8c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));