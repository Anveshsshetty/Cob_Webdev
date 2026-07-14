function showScreen(screenName) {
  const screens = document.getElementsByClassName('screen');
  for (let i = 0; i < screens.length; i++) {
    screens[i].style.display = 'none';
  }
  document.getElementById(screenName).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  showScreen('Temperature');
});
function convertTemp() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
}
function convertWeight() {
            const poundsInput = document.getElementById('pounds');
            const kilogramsInput = document.getElementById('kilograms');
            const pounds = parseFloat(poundsInput.value);
            const kilograms = pounds * 0.453592;
            kilogramsInput.value = kilograms.toFixed(2);
}
function convertArea() {
            const squaremetersInput = document.getElementById('squaremeters');
            const squarefeetInput = document.getElementById('squarefeet');
            const squarekilometersInput = document.getElementById('squarekilometers');

            const squaremeters = parseFloat(squaremetersInput.value);
            squarefeetInput.value = (squaremeters * 10.7639).toFixed(2);
            squarekilometersInput.value = (squaremeters / 1e+6).toFixed(2);
}
function convertTime() {
            const hoursInput = document.getElementById('hours');
            const minutesInput = document.getElementById('minutes');
            const secondsInput = document.getElementById('seconds');
            const hours = parseFloat(hoursInput.value);
            const minutes = hours * 60;
            const seconds = minutes * 60;
            secondsInput.value = seconds.toFixed(2);
}
function convertDistance() {
            const milesInput = document.getElementById('miles');
            const kilometersInput = document.getElementById('kilometers');
            const miles = parseFloat(milesInput.value);
            const kilometers = miles * 1.60934;
            kilometersInput.value = kilometers.toFixed(2);
}
