async function getWeather() {
    try{
        let city = document.getElementById('zipcode').value;
        let key = 'd72729578543cfc435344f99b226b1c9';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
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
    let div = document.getElementById('test');
    let fTemp = (Number(weather.main.temp) * 1.8) + 32;
    div.innerHTML =  fTemp;
}