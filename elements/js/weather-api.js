
$(document).ready(function() {
    // Get the coordinates of the current possition.
    function getGeolocation() {
        navigator.geolocation.getCurrentPosition(
            function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            getNewCurrentWeatherJsonFromCurrentPosition(lat, lng);  // --- Current Weather
            getNewWeatherForecastJsonFromCurrentPosition(lat, lng); // --- 5 day weather forecast
            $('.cities').removeClass('active');  
        },
        function (error) {
            alert("Возникла ошибка. Код ошибки - " + error.code + "  " + "\n\n* 1 - PERMISSION_DENIED / Доступ запрещен\n* 2 - POSITION_UNAVAILABLE / Положение недоступно" + "\n* 3 - TIMEOUT / Время вышло");
        });
    }
    // Get current weather JSON from current position --- Current Weather
    function getNewCurrentWeatherJsonFromCurrentPosition(lat, lng) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var urlForHost = 'https:/api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        $.getJSON(urlForHost, function() {})
        .done(function(dataWeather) {
            addCurrentWeatherInHTML(dataWeather);
        })
        .fail(function() {
            alert('No Internet connection');
        });	
    }
    // Get Weather Forecast JSON from current position --- 5 day weather forecast
    function getNewWeatherForecastJsonFromCurrentPosition(lat, lng) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var urlForHost = 'https:/api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        $.getJSON(urlForHost, function() {})
        .done(function(dataForecast) {
            addWeatherForecastInHTML(dataForecast);
            $('.lds-spinner').addClass('active'); // remove spinner
            $('.search-wrapper').addClass('active'); // remove search
        })
        .fail(function() {
            alert('No Internet connection');
        });	
    }
    // Get current weather JSON from input Value --- Current Weather
    function getNewCurrentWeatherJsonFromInputVal(cityFromInput, countryFromInput) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var urlForHost = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        $.getJSON(urlForHost, function() {})
        .done(function(dataWeather) {
            addCurrentWeatherInHTML(dataWeather);
        })
        .fail(function() {
            // alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
        });	
    }
    // Get Weather Forecast JSON from input Value  --- 5 day weather forecast
    function getNewWeatherForecastJsonFromInputVal(cityFromInput, countryFromInput) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var urlForHost = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        $.getJSON(urlForHost, function() {})
        .done(function(dataForecast) {
            addWeatherForecastInHTML(dataForecast);
            $('.weather-forecast-wrapper').addClass('active'); // show forecast
            $('.lds-spinner').addClass('active'); // remove spinner
            $('.search-wrapper').addClass('active'); // remove search
            addCountryInLocalStorage(cityFromInput, countryFromInput);
        })
        .fail(function() {
            alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
        });	
    }
    // JSON manipulations with Current Weather --- Current Weather
    function addCurrentWeatherInHTML(dataWeather) {
        // header
        var description = dataWeather.weather[0]['description'];
        description = description.charAt(0).toUpperCase() + description.substr(1);
        var icon = dataWeather.weather[0]['icon']; 
        var city = dataWeather.name; 
        var country = dataWeather.sys.country;
        var temperature = Math.round(dataWeather.main.temp);
        // content
        var windSpeed = dataWeather.wind.speed; // 1 
        var windDirection = dataWeather.wind.deg; // 1 ???
        var cloudiness = dataWeather.clouds.all; // 2 ???
        var pressure = dataWeather.main.pressure; // 3
        var humidity = dataWeather.main.humidity; // 4
        var sunrise = dataWeather.sys.sunrise // 5
        var sunset = dataWeather.sys.sunset // 6
        var lon =  dataWeather.coord.lon; // 7
        var lat =  dataWeather.coord.lat; // 7

        // Convert an epoch to human readable date:
        var sunriseConvert = timeConvertSunrise(sunrise);
        function timeConvertSunrise(sunrise) {
            var dt = new Date(sunrise*1000);
            var hr = dt.getHours();
            var m = "0" + dt.getMinutes();
            return hr+ ':' + m.substr(-2);  
        }
        var sunsetConvert = timeConvertSunset(sunset);
        function timeConvertSunset(sunset) {
            var dt = new Date(sunset*1000);
            var hr = dt.getHours();
            var m = "0" + dt.getMinutes();
            return hr+ ':' + m.substr(-2);  
        }
        $('.weather-forecast-wrapper').removeClass().addClass('weather-forecast-wrapper').addClass('active');
        $('.weather-forecast-wrapper').html('');
        $('.weather-forecast-wrapper').addClass('col-' + icon); // background
        $('.weather-forecast-wrapper').append(
            '<div class="search-location"><i class="fas fa-search-location"></i></div>'
                + '<div class="header">'
                    + '<div id="title"><h2>' + city + ', ' + country + '</h2></div>'
                    + '<div id="temperature"><h3>' + temperature + ' &deg C</h3></div>'
                    + '<div id="weather-description"><h2>' + description + '</h2></div>'
                + '</div>'

                + '<div class="content">'
                    + '<div class="weather-forecast"></div>'
                + '</div>'

                + '<div class="footer">'
                    + '<div id="info"><i class="fas fa-info-circle"></i></div>'
                + '</div>'

                + '<table id="table">'
                    + '<tbody>'
                        + '<tr><td>Wind</td><td>' + windSpeed + ' m/s, ' + windDirection + ' deg</td></tr>'
                        + '<tr><td>Cloudiness</td><td>' + cloudiness + ' %</td></tr>'
                        + '<tr><td>Pressure</td><td>' + pressure + ' hpa</td></tr>'
                        + '<tr><td>Humidity</td><td>' + humidity + ' %</td></tr>'
                        + '<tr><td>Sunrise</td><td>' + sunriseConvert + ' </td></tr>'
                        + '<tr><td>Sunset</td><td>' + sunsetConvert + ' </td></tr>'
                        + '<tr><td>Geo coords</td><td>[' + lat + ', ' + lon + ']</td></tr>'
                    + '</tbody>'
                + '</table>'
            + '</div>'
        );
    }   
    // JSON manipulations with Weather Forecast --- 5 day weather forecast
    function addWeatherForecastInHTML(dataForecast) {
        // $('.weather-forecast').html('');
        for(var i = 0; i < 40; i++) {
            var time = dataForecast.list[i]['dt_txt'].slice(10, 16);
            var day = dataForecast.list[i]['dt_txt'].slice(8, 10);
            var month = dataForecast.list[i]['dt_txt'].slice(5, 7);
            var year = dataForecast.list[i]['dt_txt'].slice(0, 4);
            var forecastDate = day + '-' + month + '-' + year + ' ' + time;
            var forecastIcon = dataForecast.list[i].weather[0]['icon']; 
            var forecastTemperature = Math.round(dataForecast.list[i].main.temp);
            
            $('.weather-forecast').append('<div id="day">' 
                + '<h4>' + forecastDate + '</h2>'
                + '<div id="small-icon">'
                + '<img src="http://openweathermap.org/img/w/' + forecastIcon + '.png" alt="x">'
                + '</div>'
                + '<p>' + forecastTemperature + ' &deg C' + '</p>' + '</div>');
        }
    }
    // Add Country in local storage
    function addCountryInLocalStorage(cityFromInput, countryFromInput) {
        countryFromInput = $.trim(countryFromInput); // remove spaces
        var locationFromInput = cityFromInput + ", " + countryFromInput;
        if (localStorage.getItem('locationArreyFromInput')) {
            var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        } else {
            var locationArreyFromInput = [];
        }
        if (locationArreyFromInput.indexOf(locationFromInput) == -1) {
            locationArreyFromInput.push(locationFromInput);
        }   
        // localStorage.removeItem('locationArreyFromInput');
        localStorage.setItem('locationArreyFromInput', JSON.stringify(locationArreyFromInput));
        updateCitiesList();
    }
    // add country to the list from local storage
    function updateCitiesList() {
        var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        $('.cities').html('');
        for (i in locationArreyFromInput) {
            $('.cities').append('<p>' + locationArreyFromInput[i] + '</p>');
        }
        $('.cities').append('<button type="reset" class="btn-clear-last">Clear the last city</button>'
            + '<button type="reset" class="btn-clear-all">Clear all cities</button>'
        );
    }

    // ---------- ON CLICK FUNCTIONS ---------- //

    // Start function to get the coordinates of the current possition.
    $('.location').on('click', function(e) {
        e.preventDefault();
        getGeolocation();
    });
    // Clear input on submit
    $('.btn').on('click', function(e) {
        e.preventDefault(); //del
        $("#input").val('');
        $(this).attr('disabled', 'disabled');
        var cityFromInput = inputVal.split(",")[0];
        cityFromInput = cityFromInput.charAt(0).toUpperCase() + cityFromInput.substr(1);
        var countryFromInput = inputVal.split(",")[1];
        if (countryFromInput == undefined) {
            alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
        } else {
            countryFromInput.toLowerCase();
            getNewCurrentWeatherJsonFromInputVal(cityFromInput, countryFromInput);
            getNewWeatherForecastJsonFromInputVal(cityFromInput, countryFromInput);
        }
    });
    // Get input value
    $("#input").keyup(function() {
        // this.value = this.value.replace(/^\d+$/, '');
        inputVal = $(this).val();
    });
    // Remove cities wenn input on focus
    $("#input").focus(function() {
        $('.cities').removeClass('active');
    });
    // Show Table
    $(document).on("click", ".search-location", function () {
        if ($('.search-wrapper').hasClass('active')) {
            $('.search-wrapper').removeClass('active')
            $('.weather-forecast-wrapper').removeClass('active');
            $('.lds-spinner').removeClass('active'); 
        } else {
            $('.search-wrapper').addClass('active')
        }
    });
    // Show Info
    $(document).on("click", "#info", function () {
        $(this).toggleClass('active');
        $('#table').toggleClass('active');
    });
    // Show the list of cities
    $(document).on("click", ".cities-btn", function () {
        var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        if (locationArreyFromInput == null) {
            alert('The list of cities is empty');
        } else {
            $('.cities').toggleClass('active');  
        }
    });
    // Get JSON from the list of cities
    $(document).on("click", ".cities > p", function () {
        thisLiInnerText = this.innerText;
        var cityFromCities = thisLiInnerText.split(',')[0];
        var countryFromCities = thisLiInnerText.split(', ')[1];
        getNewCurrentWeatherJsonFromInputVal(cityFromCities, countryFromCities);
        getNewWeatherForecastJsonFromInputVal(cityFromCities, countryFromCities);
        $('.cities').removeClass('active');  
    });
    // Clear the last city from the list
    $(document).on("click", ".btn-clear-last", function () {
        var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        if (locationArreyFromInput.length == 1) {
            localStorage.clear();
            location.reload(true);
        } else {
            locationArreyFromInput.pop();
            localStorage.setItem('locationArreyFromInput', JSON.stringify(locationArreyFromInput));
            $('.cities > p').filter(":last").remove();
        }
        updateCitiesList();
    });
    // Clear all cities from the list
    $(document).on("click", ".btn-clear-all", function () {
        location.reload(true);
        localStorage.clear();
        updateCitiesList();
    });

    // ---------- START FUNCTIONS ON LOAD ---------- //

    // Start function to get the coordinates of the current possition.
    // getGeolocation();
    // Start function to update the list of cities
    updateCitiesList();
});

// Button is disabled before you enter a zipcode
function btnIsDisabled() {
    var inputLength = $('#input').val();
    if(inputLength.length != 0 && inputLength.length > 3) {
        $('.btn').removeAttr('disabled');
    } else {
        $('.btn').attr('disabled');
    }
}











// api.openweathermap.org/data/2.5/weather?id=2172797

function getJSONtest() {
    var myKey = '018f211390dfbe3b16c69493de8abd63';
    var urlForHost = 'https://api.openweathermap.org/data/2.5/weather?lat=46.48&lon=30.73' + '&units=metric&APPID=' + myKey;
    $.getJSON(urlForHost, function() {})
    .done(function(dataTest) {
        console.log(dataTest);
    })
    .fail(function() {
        // alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
    });	
}
