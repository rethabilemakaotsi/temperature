function convertTemperature() {
    
    let temperature = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unit').value;

    
    if (isNaN(temperature)) {
      alert('Please enter a valid number for temperature.');
      return;
    }

    
    let convertedTemperature = unit === 'celsius' ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;


    let formattedResult = convertedTemperature.toFixed(2);

    
    document.getElementById('result').innerHTML = `Converted Temperature: ${formattedResult} ${unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
  }