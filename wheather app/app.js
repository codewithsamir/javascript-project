const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '21ac20d07fmshd9cf5eeabe31585p1e3e73jsnef3a31d8dff4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getwheather = (city) => {
cityName.innerText = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            
            cloud_pct.innerText = response.cloud_pct
            temp.innerText = response.temp
            temp2.innerText = response.temp
            feels_like.innerText = response.feels_like
            humidity.innerText = response.humidity
            humidity2.innerText = response.humidity
            min_temp.innerText = response.min_temp
            max_temp.innerText = response.max_temp
            wind_speed.innerText = response.wind_speed
            wind_speed2.innerText = response.wind_speed
            wind_degrees.innerText = response.wind_degrees
            sunrise.innerText = response.sunrise
            sunset.innerText = response.sunset
        })

        .catch(err => console.error(err));
    }

    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getwheather(city.value)
    })

    getwheather("nepal")