function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    let convertedTemperature;
  
    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
      convertedTemperature = (inputTemperature * 9/5) + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
      convertedTemperature = (inputTemperature - 32) * 5/9;
    } else {
      convertedTemperature = inputTemperature;
    }
  
    document.getElementById("result").textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitTo}`;
  }
  