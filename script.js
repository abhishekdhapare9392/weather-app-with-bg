let searchInput = document.querySelector('#search-input')
let searchButton = document.querySelector('#search-button')

let searchResults = document.querySelector('#render-weather')

let apiKey = 'b4a21d2f41dd0c2143e493230a5b1a01'

searchButton.addEventListener('click', (e) => {
  let searchTerm = searchInput.value
  e.preventDefault()
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      renderWeather(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

const renderWeather = (data) => {
  searchResults.innerHTML = `
    <div class="card card-body shadow border-0">
        <h2>${data.name}</h2>
        <div class="row">
            <div class="col-md-6">
                <p>Weather: ${data.weather[0].main}</p>
            </div>
            <div class="col-md-6">
                <p>Description: ${data.weather[0].description}</p>

                </div>
                <div class="col-md-6">
                <p>Longitude: ${data.coord.lon}<br />
                Lattitude: ${data.coord.lat}</p>
                </div>
                <div class="col-md-6">
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            </div>
        </div> 
    </div>
    `

  setBg(data.weather[0].main)
}

function setBg(weather) {
  if (weather == 'Clouds') {
    document.body.style.backgroundImage = "url('./images/clouds.jpg')"
  } else if (weather == 'Rain') {
    document.body.style.backgroundImage = "url('./images/rain.jpg')"
  } else if (weather == 'Clear') {
    document.body.style.backgroundImage = "url('./images/clear.jpg')"
  } else if (weather == 'Mist') {
    document.body.style.backgroundImage = "url('./images/misty.jpg')"
  } else if (weather == 'Haze') {
    document.body.style.backgroundImage = "url('./images/haze.jpg')"
  } else {
    document.body.style.backgroundImage = ''
  }
}
