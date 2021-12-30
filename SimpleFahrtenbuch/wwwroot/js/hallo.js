
let wf = null

function setContent(data) {
    let weatherDiv = document.getElementById('weather')
    
    for (let weatherForecast of data) {
        let elem = document.createElement('p')
        elem.textContent = weatherForecast.temperatureC + ' ' + weatherForecast.summary;
        weatherDiv.appendChild(elem)
    }
    wf = data
}

fetch(makeUrl('WeatherForecast'))
    .then(response => response.json())
    .then(json => setContent(json))

