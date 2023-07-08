function convert() {
    const fromUnit = document.getElementById("unit").value;
    const toUnit = document.getElementById("unit").value;
    const fromValue = parseFloat(document.getElementById("value").value);
    let res;
  
    if (fromUnit === toUnit) {
      result = fromValue;
    } else if (fromUnit === "celsius") {
      switch (toUnit) {
        case "kelvin":
          result = fromValue + 273.15;
          break;
        case "fehrenheit":
          result = fromValue * 9/5 + 32;
          break;
        default:
          break;
      }
    } else if (fromUnit === "kelvin") {
      switch (toUnit) {
        case "celsius":
          result = fromValue - 273.15;
          break;
        case "fehrenheit":
          result = (fromValue - 273.15) * 9/5 + 32;
          break;
        default:
          break;
      }
    } else if (fromUnit === "fehrenheit") {
      switch (toUnit) {
        case "celsius":
          result = (fromValue - 32) * 5/9;
          break;
        case "kelvin":
          result = (fromValue - 32) * 5/9 + 273.15;
          break;
        default:
          break;
      }
    }
    
    document.getElementById("res").innerHTML = `${fromValue} ${fromUnit} = ${res} ${toUnit}`;
  }
  