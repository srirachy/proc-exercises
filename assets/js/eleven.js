async function getWeather() {
    try{
        const city = document.getElementById('zipcode').value;
        const key = 'd72729578543cfc435344f99b226b1c9';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        await fetch(url)
        .then((weather) => {return weather.json()})
        .then(displayData);
    }
    catch{
        console.log('something went wrong');
    }
}

function displayData(weather){
    console.log(weather);
    const div = document.getElementById('test');
    const fTemp = (Number(weather.main.temp) * 1.8) + 32;
    const output = `${fTemp}${String.fromCharCode(176)}F`
    div.innerHTML =  output;
}