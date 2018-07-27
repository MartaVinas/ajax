"use strict";


// PART 1: SHOW A FORTUNE

function updateFortune(results) {
    let fortune = results;
    // updating the html fortune text with the fortune result
    $('#fortune-text').html(fortune);
}

// convention to include evt as a parameter, however could be empty and still work
function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', updateFortune);
}

$('#get-fortune-button').on('click', showFortune);
// evt = 'click', results = response from /fortune (random fortune)


// PART 2: SHOW WEATHER

function getForecast(results) {
	let forecast = results;
	$('#weather-info').html(forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, {}, getForecast);

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


