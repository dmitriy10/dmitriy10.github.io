const weather = {
    // Get current possition coordinates.
    getGeolocation : () => {
        document.querySelector('.loader').classList.add('active');
        navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            weather.getJSONfromLocation(lat, lng); // Current Weather + weather forecast
        },
        error => {
            alert("Возникла ошибка. Код ошибки - " + error.code + "  " + "\n\n* 1 - PERMISSION_DENIED / Доступ запрещен\n* 2 - POSITION_UNAVAILABLE / Положение недоступно" + "\n* 3 - TIMEOUT / Время вышло");
            document.querySelector('.loader').classList.remove('active');
        });
    },
    // Get current weather and weather Forecast(5 day weather) JSON from current position;
    getJSONfromLocation : (lat, lng) => {
        const myKey = '018f211390dfbe3b16c69493de8abd63';
        const urlWeather = 'https:/api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        const urlForecast = 'https:/api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        // weather JSON
        const weatherJSON = new Promise(resolve => {
            fetch(urlWeather)
            .then(response => response.json())
            .then((dataWeather) => {
                resolve(dataWeather);
            })
            .catch(alert);
        });
        // Weather Forecast JSON
        const forecastJSON = new Promise(resolve => {
            fetch(urlForecast)
            .then(response => response.json())
            .then((dataForecast) => {
                resolve(dataForecast);
            })
            .catch(alert);
        });
        let promises = [];
        promises.push(weatherJSON, forecastJSON);
        Promise.all(promises).then(data => {
            weather.addToHTML(data);
        });
    },
    // Get current weather and weather Forecast(5 day weather) JSON from input value;
    getJSON : (cityFromInput, countryFromInput) => {
        const myKey = '018f211390dfbe3b16c69493de8abd63';
        const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        // weather JSON
        const weatherJSON = new Promise(resolve => {
            fetch(urlWeather)
            .then(response => response.json())
            .then((dataWeather) => {
                resolve(dataWeather);
            })
            .catch(alert);
        });
        // Weather Forecast JSON
        const forecastJSON = new Promise(resolve => {
            fetch(urlForecast)
            .then(response => response.json())
            .then((dataForecast) => {
                resolve(dataForecast);
            })
            .catch(alert);
        });
        let promises = [];
        promises.push(weatherJSON, forecastJSON);
        Promise.all(promises).then(data => {
            weather.addToHTML(data, cityFromInput, countryFromInput);
        });

    },
    // Current Weather + 5 day weather forecast
    addToHTML : (promises, cityFromInput, countryFromInput) => {
        const [dataWeather, dataForecast] = promises;
        if((dataWeather.cod !== '404') && (dataForecast.cod !== '404')) {
            document.querySelector('.loader').classList.remove('active');
            document.querySelector('.search-wrapper').classList.add('active'); // remove search
            if(cityFromInput && countryFromInput) {
                weather.addCountryToLS(cityFromInput, countryFromInput, dataForecast);
            }
            // header
            let description = dataWeather.weather[0]['description'];
            description = description.charAt(0).toUpperCase() + description.substr(1);
            const icon = dataWeather.weather[0]['icon']; 
            const city = dataWeather.name; 
            const country = dataWeather.sys.country;
            const temperature = Math.round(dataWeather.main.temp);
            // content
            const windSpeed = dataWeather.wind.speed;
            const windDirection = dataWeather.wind.deg;
            const cloudiness = dataWeather.clouds.all;
            const pressure = dataWeather.main.pressure;
            const humidity = dataWeather.main.humidity;
            const sunrise = dataWeather.sys.sunrise;
            const sunset = dataWeather.sys.sunset;
            const lon =  dataWeather.coord.lon; 
            const lat =  dataWeather.coord.lat;
            // background
            const background = {
                '01d' : 'https://media.giphy.com/media/jk9L41aToGZQA/giphy.gif',
                '01n' : 'https://media.giphy.com/media/rRKcpDgvYNpEk/giphy.gif',
                '02d' : 'https://media.giphy.com/media/cabYosCcRDG12/giphy.gif',
                '02n' : 'https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif',
                '03d' : 'https://media.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy.gif',
                '03n' : 'https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif',
                '04d' : 'https://media.giphy.com/media/tlhlXmOh4eieA/giphy.gif',
                '04n' : 'https://media.giphy.com/media/SXqEudpZ5ciM8/giphy.gif',
                '09d' : 'https://media.giphy.com/media/RTEALrUIX7IAw/giphy.gif',
                '09n' : 'https://media.giphy.com/media/3osBLhm4uJMRK8tJSw/giphy.gif',
                '10d' : 'https://media.giphy.com/media/l4FsCBugoWDBUZ9O8/giphy.gif',
                '10n' : 'https://media.giphy.com/media/2xdzNrPE50WLC/giphy.gif',
                '11d' : 'https://media.giphy.com/media/EVf8tbnlr77Es/giphy.gif',
                '11n' : 'https://media.giphy.com/media/ySlDu97qfK2XK/giphy.gif',
                '13d' : 'https://media.giphy.com/media/OWxrxRHY6afRu/giphy.gif',
                '13n' : 'https://media.giphy.com/media/14uJKhQMZ1wLfO/giphy.gif',
                '50d' : 'https://media.giphy.com/media/rUrPxeIxcwZTq/giphy.gif',
                '50n' : 'https://media.giphy.com/media/Kd1L4b2SYH7SE/giphy.gif',
            }
            // Convert an epoch to human readable date:
            var sunriseConvert = timeConvertSunrise(sunrise);
            function timeConvertSunrise(sunrise) {
                const dt = new Date(sunrise*1000);
                const hr = dt.getHours();
                const m = "0" + dt.getMinutes();
                return hr+ ':' + m.substr(-2);  
            }
            const sunsetConvert = timeConvertSunset(sunset);
            function timeConvertSunset(sunset) {
                const dt = new Date(sunset*1000);
                const hr = dt.getHours();
                const m = "0" + dt.getMinutes();
                return hr+ ':' + m.substr(-2);  
            }
            // add to HTML
            const weatherForecastWrapper = document.querySelector('.weather-forecast-wrapper');
            weatherForecastWrapper.classList = "weather-forecast-wrapper active";
            weatherForecastWrapper.innerHTML = '';
            weatherForecastWrapper.style.backgroundImage = `url(${background[icon]})`;
            weatherForecastWrapper.innerHTML = 
                `<div class="search-location"><i class="fas fa-search-location"></i></div>
                    <div class="header">
                        <div id="title"><h2>${city}, ${country}</h2></div>
                        <div id="temperature"><h3>${temperature}&deg C</h3></div>
                        <div id="weather-description"><h2>${description}</h2></div>
                    </div>

                    <div class="content">
                        <div class="weather-forecast"></div>
                    </div>

                    <div class="footer">
                        <div id="info"><i class="fas fa-info-circle"></i></div>
                    </div>

                    <table id="table">
                        <tbody>
                            <tr><td>Wind</td><td>${windSpeed} m/s, ${windDirection} &deg</td></tr>
                            <tr><td>Cloudiness</td><td>${cloudiness}%</td></tr>
                            <tr><td>Pressure</td><td>${pressure} hpa</td></tr>
                            <tr><td>Humidity</td><td>${humidity}%</td></tr>
                            <tr><td>Sunrise</td><td>${sunriseConvert}</td></tr>
                            <tr><td>Sunset</td><td>${sunsetConvert}</td></tr>
                            <tr><td>Geo coords</td><td>[ ${lat}, ${lon} ]</td></tr>
                        </tbody>
                    </table>
                </div>`

            // _____________________________data Forecast______________________________________
            dataForecast.list.forEach((el) => {
                const time = el['dt_txt'].slice(10, 16);
                const day = el['dt_txt'].slice(8, 10);
                const month = el['dt_txt'].slice(5, 7);
                const year = el['dt_txt'].slice(0, 4);
                const forecastDate = day + '-' + month + '-' + year + ' ' + time;
                const forecastIcon = el.weather[0]['icon']; 
                const forecastTemperature = Math.round(el.main.temp);
                document.querySelector('.weather-forecast').innerHTML += 
                `<div id="day">
                    <h4>${forecastDate}</h4>
                    <div id="small-icon">
                        <img src="http://openweathermap.org/img/w/${forecastIcon}.png" alt="forecast">
                    </div>
                    <p>${forecastTemperature}&deg C</p>
                </div>`
            })
            forecastLoaded();
        } else {
            document.querySelector('.loader').classList.remove('active');
            alert('Not Found');
        }
    },   
    // Add Country to local storage
    addCountryToLS : (cityFromInput, countryFromInput, dataForecast) => {
        if(!isNaN(+countryFromInput)) {
            countryFromInput = dataForecast.city.country;
        } 
        const locationFromInput = cityFromInput + ", " + dataForecast.city.country;
        if (localStorage.getItem('locationArreyFromInput')) {
            var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        } else {
            var locationArreyFromInput = [];
        }
        if (locationArreyFromInput.indexOf(locationFromInput) == -1) {
            locationArreyFromInput.push(locationFromInput);
        }   
        localStorage.setItem('locationArreyFromInput', JSON.stringify(locationArreyFromInput));
        weather.updateCitiesList();
    },
    // add country to the list
    updateCitiesList : () => {
        const locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        const cities = document.querySelector('.cities');
        cities.innerHTML = '';
        for (i in locationArreyFromInput) {
            const p = document.createElement('p');
            p.addEventListener('click', (e) => {
                document.querySelector('.loader').classList.add('active');
                const thisInnerText = e.target.innerText;
                const [cityFromCities, countryFromCities] = [thisInnerText.split(',')[0],thisInnerText.split(', ')[1]];
                weather.getJSON(cityFromCities, countryFromCities);
                document.querySelector('.cities').classList.remove('active');
            });
            p.innerHTML = locationArreyFromInput[i];
            cities.appendChild(p);
        }
        // Clear the last city
        const btnClearLast = document.createElement('button');
        btnClearLast.innerHTML = 'Clear last city';
        btnClearLast.classList = 'btn-clear-last';
        btnClearLast.type = 'reset';
        btnClearLast.addEventListener('click', () => {
            const locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
            if (locationArreyFromInput.length == 1) {
                localStorage.clear();
            } else {
                locationArreyFromInput.pop();
                localStorage.setItem('locationArreyFromInput', JSON.stringify(locationArreyFromInput));
                const lastP = document.querySelector('.cities').lastChild.previousElementSibling.previousElementSibling;
                document.querySelector('.cities').removeChild(lastP);
            }
            weather.updateCitiesList();
        });
        cities.appendChild(btnClearLast);

        // Clear all cities 
        const btnClearAll = document.createElement('button');
        btnClearAll.innerHTML = 'Clear all cities';
        btnClearAll.classList = 'btn-clear-all';
        btnClearAll.type = 'reset';
        btnClearAll.addEventListener('click', () => {
            localStorage.clear();
            weather.updateCitiesList();
        });
        cities.appendChild(btnClearAll);

        if (locationArreyFromInput === null) {
            cities.classList.remove('active');
        }
    },
    // Button disabled before enter
    btnDisabled : () => {
        const inputValLength = document.querySelector('#input').value.length
        const btn = document.querySelector('.btn');        
        if(inputValLength != 0 && inputValLength > 3) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', 'disabled');
        }
    },
    splitVal : inputVal => {
        let cityFromInput = inputVal.split(",")[0];
        cityFromInput = cityFromInput.charAt(0).toUpperCase() + cityFromInput.substr(1);
        const countryFromInput = inputVal.split(",")[1];
        if (countryFromInput === undefined) {
            alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
            document.querySelector('.loader').classList.remove('active');
        } else {
            if(isNaN(+cityFromInput) || isNaN(+countryFromInput)) {
                countryFromInput.toLowerCase();
                weather.getJSON(cityFromInput, countryFromInput);
            } else {
                alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
                document.querySelector('.loader').classList.remove('active');
            }
        }
    }
}

// ---------- ON CLICK FUNCTIONS ---------- //
// Start function to get current possition coordinates
document.querySelector('.location').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.cities').classList.remove('active');
    weather.getGeolocation();
});
// get input value and clear it on submit
document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.loader').classList.add('active');
    let inputVal = document.querySelector("#input").value
    document.querySelector('.btn').setAttribute('disabled','disabled');
    weather.splitVal(inputVal);
    document.querySelector("#input").value = '';
});
// Get input value
document.querySelector('#input').addEventListener('keyup', () => {
    weather.btnDisabled();
});
// Remove cities when input on focus
document.querySelector('#input').addEventListener('focus', () => {
    document.querySelector('.cities').classList.remove('active');
});
// Show cities list 
document.querySelector('.cities-btn').addEventListener( 'click', () => {
    const locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
    if (locationArreyFromInput == null) {
        alert('List is empty');
    } else {
        document.querySelector('.cities').classList.toggle('active');
    }
});
const forecastLoaded = () => {
    // Show Table
    document.querySelector('.search-location').addEventListener( 'click', () => {
        const searchWrapper = document.querySelector('.search-wrapper');
        if(searchWrapper.classList.contains('active')) {
            document.querySelector('.search-wrapper').classList.remove('active')
            document.querySelector('.weather-forecast-wrapper').classList.remove('active');
        } else {
            document.querySelector('.search-wrapper').classList.add('active')
        }
    });
    // Show Info
    document.querySelector('#info').addEventListener( 'click', () => {
        document.querySelector('#info').classList.toggle('active');
        document.querySelector('#table').classList.toggle('active');
    });
}

// ---------- START FUNCTIONS ON LOAD ---------- //
// Start function to get the coordinates of the current possition.
weather.getGeolocation();
// Start function to update cities list 
weather.updateCitiesList();
