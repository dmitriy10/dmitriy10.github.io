$(function() {

    $("#input").keyup(function() {
        inputVal = $(this).val();
                
    });

    // Get Citys list from locastorage
    if (localStorage.getItem('citiesFromJson')) {
        var citiesFromJson = JSON.parse(localStorage.getItem('citiesFromJson'));
    } else {
        var citiesFromJson = [];
    }

    function saveCityFnc() {
        if (inputVal.length > 4 ) {
            $.getJSON('http://api.zippopotam.us/us/' + inputVal, function(data) {
            
            placeName = data.places[0]['place name'];
            state = data.places[0].state;
            stateAbbreviation = data.places[0]['state abbreviation']
            summaryPlaceName = placeName + ', ' + state + ', ' + stateAbbreviation;

            if (citiesFromJson.indexOf(summaryPlaceName) == -1) {
                citiesFromJson.push(summaryPlaceName);
            }    

            localStorage.removeItem('citiesFromJson');
            localStorage.setItem('citiesFromJson', JSON.stringify(citiesFromJson));

            updateCitiesList();

            
            $('.btn').attr('disabled','disabled');

            }).fail(function() {
                alert('Incorrect zipcode');
                $('.btn').attr('disabled','disabled');
            });

        } 
    }
    //update city list
    function updateCitiesList() {
        $('#places').html('');
        for (i in citiesFromJson) {
            $('#places').append('<li>' + citiesFromJson[i] + '</li>');
        }
    }

    //add city to the list
    $('.btn').click(function(e) {
        e.preventDefault();
        saveCityFnc();
    });


    // clear the last added item
    $('.btn-clear-last').on('click', function() { 
        var citiesFromJson = JSON.parse(localStorage.getItem('citiesFromJson'));
        citiesFromJson.pop();
        localStorage.setItem('citiesFromJson', JSON.stringify(citiesFromJson));
        $('#places > li').filter(":last").remove();
        location.reload(true)
    });

    // Btn is blocked
    $('form').submit(function( e ) {
        $('input[type=submit]', $(this)).prop( 'disabled', true );
        e.preventDefault();
    });

    // clear all
    $('.btn-clear-all').on('click', function() { 
        localStorage.clear();
        citiesFromJson = [];
        $('#places').remove();
        location.reload(true)
    });

    // Clear input on submit
    $('.btn').on('click', function() {
        $("#input").val('');
    });

    // Is not alowed to input "" into the field
    $("input").on( {
        keydown: function(e) {
            if (e.which === 32)
            return false;
        },
        change: function() {
            this.value = this.value.replace(/\s/g, "");
        }
    });

    // Input only numbers into the field
    $("input").keyup(function(e){
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });

    $(document).on("click", "li", function () {
        thisLiInnerText = this.innerText;
        var thisPlaceName = thisLiInnerText.split(',')[0];
        var thisStateAbbreviation = thisLiInnerText.split(', ')[2];
        newJsonLink = 'http://api.zippopotam.us/us/' + thisStateAbbreviation.toLowerCase() + '/' + thisPlaceName.toLowerCase();

        // Example: api.zippopotam.us/us/ma/belmont

        thisLi = this;
        getNewJson(newJsonLink, thisLi);
    });

    function getNewJson(newJsonLink, thisLi) {
        $.getJSON(newJsonLink, function(data) {
        thisLi.append(' ( ');
            for(i in data.places) {	
                var postCode = data.places[i]['post code'];
                thisLi.append('   ' + postCode);
            }
        thisLi.append(' )');
        $("#input").val(postCode);
        }).fail(function() {
            alert('Houston we have a problem');
        });
    }

    updateCitiesList();

});



// Button is disabled before you enter a zipcode
function btnIsDisabled() {
    var inputLength = $('#input').val();
    if(inputLength.length != 0 && inputLength.length == 5) {
        $('.btn').removeAttr('disabled');
    } else {
        $('.btn').attr('disabled');
    }
}














//  Don't allow duplicate records
//  var newText = [];
//  $('ul li').each(function() {
//  var thisText = $(this).text();
//      if (newText[thisText]) {
//          $(this).remove();
//      }
//      else {
//          newText[thisText] = true;
//      }








