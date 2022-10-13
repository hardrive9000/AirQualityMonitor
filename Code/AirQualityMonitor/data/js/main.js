var quality = document.getElementById('quality');
var temperature = document.getElementById('temp');
var humidity = document.getElementById('rh');

var connection = new WebSocket('ws://' + location.hostname + '/ws', ['arduino']);

connection.onopen = function () {
    console.log('Connected: ');
};

connection.onerror = function (error) {
    console.log('WebSocket Error ', error);
};

connection.onmessage = function (e) {
    const jsonData = JSON.parse(e.data);
    quality.innerHTML = jsonData.air;
    if (jsonData["temperature"])
        temperature.innerHTML = jsonData.temperature;
    if (jsonData["humidity"])
        humidity.innerHTML = jsonData.humidity;

    console.log('Server: ', e.data);
};

connection.onclose = function () {
    console.log('WebSocket connection closed');
};
