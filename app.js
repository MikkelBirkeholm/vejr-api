import { translateWeathercode } from './modules/translateWeathercode.js';
import { windDirection } from './modules/windDirection.js';
import { convertDateTime } from './modules/convertDateTime.js';
import { getUrlDates } from './modules/getUrlDates.js';

const dailyList = document.querySelector('#daily');
const hourlyList = document.querySelector('#hourly');
const currentList = document.querySelector('#current');

// fetch('https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=Europe%2FBerlin')

console.log(getUrlDates()[0], getUrlDates()[1])


fetch(`https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&hourly=temperature_2m,precipitation,weathercode,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=Europe%2FBerlin&start_date=${getUrlDates()[0]}&end_date=${getUrlDates()[1]}`)
    .then(data => data.json())
    .then(data => {
        console.log(data.hourly);
        console.log(data.daily);
        createWeekView(data.daily, dailyList);
        createHourView(data.hourly, hourlyList);

    })
    .catch(err => console.log(err));


function createWeekView(data, list) {
    length = data.time.length;
    let i = 0;
    while (i < length) {
        let li = document.createElement('li');
        let newCard = `
        <div class="card" style="background-image: url(/images/${translateWeathercode(data.weathercode[i])[1]})" data-date="${convertDateTime(data.time[i])}">
            <div class="card-data">
                <span class="temp">
                <span class="max-temp" data-feel="${data.apparent_temperature_max[i]}">${data.temperature_2m_max[i]}°C</span>
                <span class="min-temp" data-feel="${data.apparent_temperature_min[i]}">${data.temperature_2m_min[i]}°C</span>
                </span>
                </div>
                <span class="rain">${data.precipitation_sum[i]} mm</span>
            <span class="wind">${windDirection(data.winddirection_10m_dominant[i])}</span>
            <p>${translateWeathercode(data.weathercode[i])[0]}</p>
            <div class="card-overlay"></div>
        </div>
        `
        li.innerHTML = newCard;
        list.appendChild(li);
        i++
    }
}

function createHourView(data, list) {
    let a = 0;
    let i = new Date().getHours();
    while (48 > a) {
        let hourtime = new Date(data.time[i] * 1000).getHours();
        hourtime = hourtime <= 9 ? '0' + hourtime : hourtime;
        let li = document.createElement('li');
        let newCard = `
        <div class="hour">
        <span>${hourtime}</span>
                <span class="hour-temp">${data.temperature_2m[i]}°C</span>
                <span class="hour-rain">${data.precipitation[i]} mm</span>
                <span class="hour-wind">${windDirection(data.winddirection_10m[i])}</span>
                <span>${translateWeathercode(data.weathercode[i])[0]}</span>

        </div>
        `
        li.innerHTML = newCard;
        list.appendChild(li);
        a++
        i++
    }
}

