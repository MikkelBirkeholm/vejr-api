export function translateWeathercode(code) {
    let weather = '';
    if (code === 0) {
        weather = ['Skyfrit', 'clear.jpg'];
    }
    else if (code === 1 || code === 2 || code === 3) {
        weather = {
            1: ['Klar himmel', 'clear.jpg'],
            2: ['Delvist skyet', 'cloudy.jpg'],
            3: ['Overskyet', 'cloudy.jpg']
        }
    } else if (code === 45 || code === 48) {
        weather = {
            45: ['Tåget', 'fog.jpg'],
            48: ['Rimtåget', 'fog.jpg']
        }

    } else if (code === 51 || code === 53 || code === 55) {
        weather = {
            51: ['Lette regnbyger', 'rainy.jpg'],
            53: ['Regnbyger', 'rainy.jpg'],
            55: ['Kraftige regnbyger', 'rainy-heavy.jpg']
        }

    } else if (code === 56 || code === 57) {
        weather = {
            56: ['Lette byger af slud', 'rainy.jpg'],
            57: ['Byger af slud', 'rainy.jpg']
        }

    } else if (code === 61 || code === 63 || code === 65) {
        weather = {
            61: ['Let regn', 'rainy.jpg'],
            63: ['Regn', 'rainy.jpg'],
            65: ['Kraftig regn', 'rainy-heavy.jpg']
        }

    } else if (code === 66 || code === 67) {
        weather = {
            66: ['Let slud', 'rainy.jpg'],
            67: ['Slud', 'rainy.jpg']
        }

    } else if (code === 71 || code === 73 || code === 75) {
        weather = {
            71: ['Let sne', 'snowy.jpg'],
            73: ['Sne', 'snowy.jpg'],
            75: ['Kraftig sne', 'snowy-heavy.jpg']
        }

    } else if (code === 77) {
        weather = ['Hagl', 'rainy.jpg']
    } else if (code === 80 || code === 81 || code === 82) {
        weather = {
            80: ['Let regnbyger', 'rainy.jpg'],
            81: ['Regnbyger', 'rainy.jpg'],
            82: ['Kraftige regnbyger', 'rainy-heavy.jpg']
        }

    } else if (code === 85 || code === 86) {
        weather = {
            85: ['Lette snebyger', 'snowy.jpg'],
            86: ['Snebyger', 'snowy.jpg']
        }
    } else if (code === 95) {
        weather = ['Let til moderat tordenvejr', 'thunderstorm.jpg']
    } else if (code === 96 || code === 99) {
        weather = {
            96: ['Tordenvejr og hagl', 'thunderstorm.jpg'],
            99: ['Tordenvejr og krafitg hagl', 'thunderstorm.jpg']
        }
    }

    return weather[code]
}