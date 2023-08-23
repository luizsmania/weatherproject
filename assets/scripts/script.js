const key = 'f132a94011cbf4355115fe11f57a3462';


async function getWeatherData(city) {
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + ", US,uk&units=metric&appid=" + key);
        const data = await response.json();
        console.log(data);
        updateDOM(city, data);
    } catch (error) {
        alert("This is not a valid city name!");
    }
};