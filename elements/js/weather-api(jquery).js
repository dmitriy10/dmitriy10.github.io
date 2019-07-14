var weather = {
    // Get current possition coordinates.
    getGeolocation : function () {
        $('.loader').addClass('active');
        navigator.geolocation.getCurrentPosition(
            function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            weather.getWheatherFrCurrPos(lat, lng);  // --- Current Weather
            weather.getForecastFrCurrPos(lat, lng); // --- 5 day weather forecast
        },
        function (error) {
            alert("Возникла ошибка. Код ошибки - " + error.code + "  " + "\n\n* 1 - PERMISSION_DENIED / Доступ запрещен\n* 2 - POSITION_UNAVAILABLE / Положение недоступно" + "\n* 3 - TIMEOUT / Время вышло");
            $('.loader').removeClass('active');
        });
    },
    // Get current weather JSON from current position --- Current Weather
    getWheatherFrCurrPos : function (lat, lng) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var url = 'https:/api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        $.ajax(url, {
            dataType: 'json',
            success: function(dataWeather) {
                weather.addToHTML(dataWeather);
            },
            error: function() {
                alert('Error / No Internet connection');
            },
        });
    },
    // Get Weather Forecast JSON from current position --- 5 day weather forecast
    getForecastFrCurrPos : function (lat, lng) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var url = 'https:/api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lng + '&units=metric&APPID=' + myKey;
        $.ajax(url, {
            dataType: 'json',
            success: function(dataForecast) {
                weather.addForecastToHTML(dataForecast);
            },
            error: function() {
                alert('Error / No Internet connection');
            },
            complete: function() {
                $('.loader').removeClass('active');
                $('.search-wrapper').addClass('active'); // remove search
            }
        });
    },
    // Get current weather JSON from input Value --- Current Weather
    getWeather : function (cityFromInput, countryFromInput) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        $.ajax(url, {
            dataType: 'json',
            beforeSend: function() {
                $('.loader').addClass('active');
            },
            success: function(dataWeather) {
                weather.addToHTML(dataWeather);
                $('.search-wrapper').addClass('active'); // remove search
            },
            error: function(error) {
                alert('Weather\n' + error.responseJSON.cod + '\n' + error.responseJSON.message)
            },
            complete: function() {
                $('.loader').removeClass('active');
            }
        });
    },
    // Get Weather Forecast --- 5 day weather forecast
    getForecast : function(cityFromInput, countryFromInput) {
        var myKey = '018f211390dfbe3b16c69493de8abd63';
        var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityFromInput +',' + countryFromInput + '&units=metric&APPID=' + myKey;
        $.ajax(url, {
            dataType: 'json',
            beforeSend: function() {
                $('.loader').addClass('active');
            },
            success: function(dataForecast) {
                weather.addForecastToHTML(dataForecast);
                weather.addCountryToLS(cityFromInput, countryFromInput, dataForecast);
                $('.search-wrapper').addClass('active'); // remove search
                $('.weather-forecast-wrapper').addClass('active'); // show forecast
            },
            error: function(error) {
                alert('Forecast\n' + error.responseJSON.cod + '\n' + error.responseJSON.message)
            },
            complete: function() {
                $('.loader').removeClass('active');
            }
        });
    },
    // Current Weather
    addToHTML : function(dataWeather) {
        // header
        var description = dataWeather.weather[0]['description'];
        description = description.charAt(0).toUpperCase() + description.substr(1);
        var icon = dataWeather.weather[0]['icon']; 
        var city = dataWeather.name; 
        var country = dataWeather.sys.country;
        var temperature = Math.round(dataWeather.main.temp);
        // content
        var windSpeed = dataWeather.wind.speed;
        var windDirection = dataWeather.wind.deg;
        var cloudiness = dataWeather.clouds.all;
        var pressure = dataWeather.main.pressure;
        var humidity = dataWeather.main.humidity;
        var sunrise = dataWeather.sys.sunrise;
        var sunset = dataWeather.sys.sunset;
        var lon =  dataWeather.coord.lon; 
        var lat =  dataWeather.coord.lat;
        // background
        var background = {
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

        // add to HTML
        $('.weather-forecast-wrapper').removeClass().addClass('weather-forecast-wrapper active');
        $('.weather-forecast-wrapper').html('');
        $('.weather-forecast-wrapper').addClass('col-' + icon); // background
        $('.weather-forecast-wrapper').css('backgroundImage', 'url('+background[icon])+')'; // background
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
    },   
    // 5 day weather forecast
    addForecastToHTML : function(dataForecast) {
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
    },
    // Add Country to local storage
    addCountryToLS : function(cityFromInput, countryFromInput, dataForecast) {
        if(!isNaN(+countryFromInput)) {
            countryFromInput = dataForecast.city.country;
        } else {
            countryFromInput = $.trim(countryFromInput); // remove spaces
        }
        var locationFromInput = cityFromInput + ", " + dataForecast.city.country;
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
    updateCitiesList : function() {
        var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
        $('.cities').html('');
        for (i in locationArreyFromInput) {
            $('.cities').append('<p>' + locationArreyFromInput[i] + '</p>');
        }
        $('.cities').append('<button type="reset" class="btn-clear-last">Clear last city</button>'
            + '<button type="reset" class="btn-clear-all">Clear all cities</button>'
        );
        if (locationArreyFromInput === null) {
            $('.cities').removeClass('active');
        }
    },
    // Button disabled before enter
    btnDisabled : function() {
        var inputLength = $('#input').val();
        if(inputLength.length != 0 && inputLength.length > 3) {
            $('.btn').removeAttr('disabled');
        } else {
            $('.btn').attr('disabled', 'disabled');
        }
    },
    splitVal : function(inputVal) {
        var cityFromInput = inputVal.split(",")[0];
        cityFromInput = cityFromInput.charAt(0).toUpperCase() + cityFromInput.substr(1);
        var countryFromInput = inputVal.split(",")[1];
        if (countryFromInput === undefined) {
            alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
        } else {
            if(isNaN(+cityFromInput) || isNaN(+countryFromInput)) {
                countryFromInput.toLowerCase();
                weather.getWeather(cityFromInput, countryFromInput);
                weather.getForecast(cityFromInput, countryFromInput);
            } else {
                alert('Not found.\nEnter city and country name.\nExample: Odessa, ua');
            }
        }
    }
}

// ---------- ON CLICK FUNCTIONS ---------- //
// Start function to get current possition coordinates
$('.location').on('click', function(e) {
    e.preventDefault();
    $('.cities').removeClass('active');  
    weather.getGeolocation();
});
// Clear input on submit
$('.btn').on('click', function(e) {
    e.preventDefault(); 
    var inputVal = $("#input").val();
    weather.splitVal(inputVal);
    $("#input").val('');
    $(this).attr('disabled', 'disabled');
});
// Get input value
$("#input").keyup(function() {
    weather.btnDisabled();
});
// Remove cities when input on focus
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
// Show cities list 
$('.cities-btn').on("click",function() {
    var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
    if (locationArreyFromInput == null) {
        alert('List is empty');
    } else {
        $('.cities').toggleClass('active');  
    }
});
// Get JSON from cities list 
$('.cities').on("click", 'p', function() {
    thisLiInnerText = this.innerText;
    var cityFromCities = thisLiInnerText.split(',')[0];
    var countryFromCities = thisLiInnerText.split(', ')[1];
    weather.getWeather(cityFromCities, countryFromCities);
    weather.getForecast(cityFromCities, countryFromCities);
    $('.cities').removeClass('active');  
});
// Clear the last city
$(document).on("click", '.btn-clear-last', function() {
    var locationArreyFromInput = JSON.parse(localStorage.getItem('locationArreyFromInput'));
    if (locationArreyFromInput.length == 1) {
        localStorage.clear();
    } else {
        locationArreyFromInput.pop();
        localStorage.setItem('locationArreyFromInput', JSON.stringify(locationArreyFromInput));
        $('.cities > p').filter(":last").remove();
    }
    weather.updateCitiesList();
});
// Clear all cities 
$(document).on("click", ".btn-clear-all", function () {
    localStorage.clear();
    weather.updateCitiesList();
});

// ---------- START FUNCTIONS ON LOAD ---------- //
// Start function to get the coordinates of the current possition.
weather.getGeolocation();
// Start function to update cities list 
weather.updateCitiesList();


