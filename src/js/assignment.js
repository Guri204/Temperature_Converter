'use strict';

const form = document.querySelector('form');
const themeSwitch = document.querySelector('.theme-switch');
const outputDisplay = document.querySelector('#output');
const tempInput = document.querySelector('.temperature');
const toFahrenheit = document.querySelector('#toFahrenheit');
const toCelsius = document.querySelector('#toCelsius');
const body = document.body;


function convertTemperature() {
    const tempValue = tempInput.value;

    if (!tempValue || isNaN(tempValue)) {
        outputDisplay.innerText = "Please, enter a valid number!";
        return;
    }

    const temperature = parseFloat(tempValue);
    let result;

    if (toFahrenheit.checked) {
        result = (temperature * 9 / 5) + 32;
        outputDisplay.innerText = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        result = (temperature - 32) * 5 / 9;
        outputDisplay.innerText = `${temperature}°F = ${result.toFixed(2)}°C`;
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    convertTemperature();
});


themeSwitch.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeSwitch.innerText = "Light Mode";
    } else {
        themeSwitch.innerText = "Dark Mode";
    }
});
