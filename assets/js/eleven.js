const getWeatherOne = () => {
    const val = 0;
    const [url, key] = getUrl();
    getWeather(url, key, val);
}

const getWeatherFive = () => {
    const val = 1;
    const [url, key] = getUrl();
    getWeather(url, key, val);
}

const getUrl = () => {
    const userInput = document.getElementById('userinput').value;
    const keyStr = 'd72729578543cfc435344f99b226b1c9';
    const urlStr = Number(userInput)
    ? `https://api.openweathermap.org/data/2.5/weather?zip=${userInput}&appid=${keyStr}&units=imperial`
    : `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${keyStr}&units=imperial`;
    return [urlStr, keyStr];
}

async function getWeather(wUrl, wKey, wVal) {
    try{
        let res = await fetch(wUrl);
        let resData = await res.json();
        const [lng, lat] = getCoords(resData);
        const urlFc = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${wKey}&units=imperial`;
        res = await fetch(urlFc);
        resData = await res.json();
        const wData = filterData(resData);
        wVal ? displayFive(wData) : displayOne(wData[0]);
    }
    catch{
        console.log('something went wrong');
    }
}

const filterData = (data) => {
    const textCheck = `12:00:00`;
    const listData = data.list;
    const mapData = listData.filter((d) => {
        if(d.dt_txt.split(' ')[1] === textCheck){
            return d;
        }
    })
    return mapData;
}

const displayOne = (data) => {
    const ele = document.getElementById('cardDiv');
    const card = createCard(data, 'm-3');
    ele.innerHTML = card;
}

const displayFive = (data) => {
    const ele = document.getElementById('cardDiv');
    const cardMap = data.map((weather) => {
        const card = createCard(weather, 'm-3');
        return card;
    });
    ele.innerHTML = cardMap.join('');
}

const createCard = (d, m) => {
    const [year, month, day] = d.dt_txt.split(' ')[0].split('-');
    const date = `${month}/${day}/${year}`;
    const main = d.main;
    const weather = d.weather[0];
    const icon = weather.icon.slice(0, 2);
    const iconSrc = `https://openweathermap.org/img/wn/${icon}d@4x.png`
    const card = `
    <div class="card ${m}">
        <img class="card-img-top" src="${iconSrc}" alt="${weather.description} icon" />
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <h4 class="card-title">${date}</h4>
            <p class="card-text">Current: ${main.temp}</p>
            <p class="card-text">Feels Like: ${main.feels_like}</p>
            <p class="card-text">Max: ${main.temp_max}</p>
            <p class="card-text">Min: ${main.temp_min}</p>
        </div>
    </div>`;
    return card;
}

const getCoords = (data) => {
    const longitude = data.coord.lon;
    const latitude = data.coord.lat;
    return [longitude, latitude];
}
