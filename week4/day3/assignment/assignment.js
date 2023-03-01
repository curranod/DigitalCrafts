const citySearch = document.getElementById('citySearch')
const citySearchBttn = document.getElementById('citySearchBttn')
const weatherUl = document.getElementById('weatherUl')
const searchedUl = document.getElementById('searchedUl')
const yourUl = document.getElementById('yourUl')

function showAllWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=houston&appid=feeb1e15933c3850daf212f6801a413c&units=imperial')
    .then(response => response.json())
    .then(info => {
            infoDisp = `
            <h1>Houston Weather</h1>
            <li>city: ${info.name}</li>
            <li>temperoony: ${info.main.temp}</li>
            <li>Min Temp: ${info.main.temp_min}</li>
            <li>Max Temp:${info.main.temp_max}</li>
            <li>Pressure: ${info.main.pressure}</li>
            `
            weatherUl.innerHTML += infoDisp
        })
        
}
showAllWeather()

function getByCity() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(info => {
            infoDisp = `
            
            <li>city: ${info.name}</li>
            <li>temperoony: ${info.main.temp}</li>
            <li>Min Temp: ${info.main.temp_min}</li>
            <li>Max Temp:${info.main.temp_max}</li>
            <li>Pressure: ${info.main.pressure}</li>
            `
            searchedUl.innerHTML += infoDisp
        })
}

citySearchBttn.addEventListener('click', getByCity)

function failure() { 
    window.alert('cannot provide current locaion weather info')
}

const success = position => {
    const {latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(info => {
        infoDisp = `
        <h1>Your Weather</h1>
        <li>city: ${info.name}</li>
        <li>temperoony: ${info.main.temp}</li>
        <li>Min Temp: ${info.main.temp_min}</li>
        <li>Max Temp:${info.main.temp_max}</li>
        <li>Pressure: ${info.main.pressure}</li>
        `
        yourUl.innerHTML += infoDisp
    })
}

navigator.geolocation.getCurrentPosition(success, failure)