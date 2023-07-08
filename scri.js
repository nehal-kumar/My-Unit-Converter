function convert() {
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;
  const fromValue = parseFloat(document.getElementById("from-value").value);
  let result;

  if (fromUnit === toUnit) {
    result = fromValue;
  } else if (fromUnit === "inches") {
    switch (toUnit) {
      case "feet":
        result = fromValue / 12;
        break;
      case "yards":
        result = fromValue / 36;
        break;
      case "miles":
        result = fromValue / 63360;
        break;
      case "millimeters":
        result = fromValue * 25.4;
        break;
      case "centimeters":
        result = fromValue * 2.54;
        break;
      case "meters":
        result = fromValue * 0.0254;
        break;
      case "kilometers":
        result = fromValue * 0.0000254;
        break;
      default:
        break;
    }
  } else if (fromUnit === "feet") {
    switch (toUnit) {
      case "inches":
        result = fromValue * 12;
        break;
      case "yards":
        result = fromValue / 3;
        break;
      case "miles":
        result = fromValue / 5280;
        break;
      case "millimeters":
        result = fromValue * 304.8;
        break;
      case "centimeters":
        result = fromValue * 30.48;
        break;
      case "meters":
        result = fromValue * 0.3048;
        break;
      case "kilometers":
        result = fromValue * 0.0003048;
        break;
      default:
        break;
    }
  } else if (fromUnit === "yards") {
    switch (toUnit) {
      case "inches":
        result = fromValue * 36;
        break;
      case "feet":
        result = fromValue * 3;
        break;
      case "miles":
        result = fromValue / 1760;
        break;
      case "millimeters":
        result = fromValue * 914.4;
        break;
      case "centimeters":
        result = fromValue * 91.44;
        break;
      case "meters":
        result = fromValue * 0.9144;
        break;
      case "kilometers":
        result = fromValue * 0.0009144;
        break;
      default:
        break;
    }
  } else if (fromUnit === "miles") {
    switch (toUnit) {
      case "inches":
        result = fromValue * 63360;
        break;
      case "feet":
        result = fromValue * 5280;
        break;
      case "yards":
        result = fromValue * 1760;
        break;
      case "millimeters":
        result = fromValue * 1609344;
        break;
      case "centimeters":
        result = fromValue * 160934.4;
        break;
      case "meters":
        result = fromValue * 1609.344;
        break;
      case "kilometers":
        result = fromValue * 1.609344;
        break;
      default:
        break;
    }
  } else if (fromUnit === "millimeters") {
    switch (toUnit) {
      case "inches":
        result = fromValue / 25.4;
        break;
      case "feet":
        result = fromValue / 304.8;
        break;
      case "yards":
        result = fromValue / 914.4;
        break;
      case "miles":
        result = fromValue / 1609344;
        break;
      case "centimeters":
        result = fromValue / 10;
        break;
      case "meters":
        result = fromValue / 1000;
        break;
      case "kilometers":
        result = fromValue / 1000000;
        break;
      default:
        break;
    }
  } else if (fromUnit === "centimeters") {
    switch (toUnit) {
      case "inches":
        result = fromValue / 2.54;
        break;
      case "feet":
        result = fromValue / 30.48;
        break;
      case "yards":
        result = fromValue / 91.44;
        break;
      case "miles":
        result = fromValue / 160934.4;
        break;
      case "millimeters":
        result = fromValue * 10;
        break;
      case "meters":
        result = fromValue / 100;
        break;
      case "kilometers":
        result = fromValue / 100000;
        break;
      default:
        break;
    }
  } else if (fromUnit === "meters") {
    switch (toUnit) {
      case "inches":
        result = fromValue / 0.0254;
        break;
      case "feet":
        result = fromValue / 0.3048;
        break;
      case "yards":
        result = fromValue / 0.9144;
        break;
      case "miles":
        result = fromValue / 1609.344;
        break;
      case "millimeters":
        result = fromValue * 1000;
        break;
      case "centimeters":
        result = fromValue * 100;
        break;
      case "kilometers":
        result = fromValue / 1000;
        break;
      default:
        break;
    }
  } else if (fromUnit === "kilometers") {
    switch (toUnit) {
      case "inches":
        result = fromValue / 0.0000254;
        break;
      case "feet":
        result = fromValue / 0.0003048;
        break;
      case "yards":
        result = fromValue / 0.0009144;
        break;
      case "miles":
        result = fromValue / 1.609344;
        break;
      case "millimeters":
        result = fromValue * 1000000;
        break;
      case "centimeters":
        result = fromValue * 100000;
        break;
      case "meters":
        result = fromValue * 1000;
        break;
      default:
        break;
    }
  }

  document.getElementById("result").innerHTML = `${fromValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}

function conver() {
  const fromUnit = document.getElementById("unit").value;
  const toUnit = document.getElementById("uni").value;
  const fromValue = parseFloat(document.getElementById("value").value);
  let resu;

  if (fromUnit === toUnit) {
    resu = fromValue;
  } else if (fromUnit === "celsius") {
    switch (toUnit) {
      case "kelvin":
        resu = fromValue + 273.15;
        break;
      case "fehrenheit":
        resu = fromValue * 9 / 5 + 32;
        break;
      default:
        break;
    }
  } else if (fromUnit === "kelvin") {
    switch (toUnit) {
      case "celsius":
        resu = fromValue - 273.15;
        break;
      case "fehrenheit":
        resu = (fromValue - 273.15) * 9 / 5 + 32;
        break;
      default:
        break;
    }
  } else if (fromUnit === "fehrenheit") {
    switch (toUnit) {
      case "celsius":
        resu = (fromValue - 32) * 5 / 9;
        break;
      case "kelvin":
        resu = (fromValue - 32) * 5 / 9 + 273.15;
        break;
      default:
        break;
    }
  }

  document.getElementById("res").innerHTML = `${fromValue} ${fromUnit} = ${resu.toFixed(4)} ${toUnit}`;
}

function convert1() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const unit1 = document.getElementById("unit1").value;
  const unit2 = document.getElementById("unit2").value;

  let result10;

  switch (unit1) {
    case "square-meter":
      switch (unit2) {
        case "square-meter":
          result10 = value1;
          break;
        case "square-kilometer":
          result10 = value1 / 1000000;
          break;
        case "square-centimeter":
          result10 = value1 * 10000;
          break;
        case "square-milimeter":
          result10 = value1 * 1000000;
          break;
        case "Hectare":
          result10 = value1 / 10000;
          break;
        case "square-mile":
          result10 = value1 / 1609.344 / 1609.344;
          break;
        case "square-yard":
          result10 = value1 * 1.19599;
          break;
      }
      break;
    case "square-kilometer":
      // write code to convert from square-kilometer to other units
      break;
    case "square-centimeter":
      // write code to convert from square-centimeter to other units
      break;
    case "square-milimeter":
      // write code to convert from square-milimeter to other units
      break;
    case "Hectare":
      // write code to convert from Hectare to other units
      break;
    case "square-mile":
      // write code to convert from square-mile to other units
      break;
    case "square-yard":
      // write code to convert from square-yard to other units
      break;
  }

  document.getElementById("result1").innerHTML = `${value1} ${unit1} = ${result10.toFixed(4)} ${unit2}`;
}

function convert2() {
  const value3 = parseFloat(document.getElementById("value3").value);
  const unit3 = document.getElementById("unit3").value;
  const unit4 = document.getElementById("unit4").value;
  let result2;

  if (unit3 === "pounds") {
    if (unit4 === "pounds") {
      result2 = value3;
    } else if (unit4 === "ounces") {
      result2 = value3 * 16;
    } else if (unit4 === "grams") {
      result2 = value3 * 453.592;
    } else if (unit4 === "kilograms") {
      result2 = value3 * 0.453592;
    } else if (unit4 === "tons") {
      result2 = value3 * 0.0005;
    }
  } else if (unit3 === "ounces") {
    if (unit4 === "pounds") {
      result2 = value3 * 0.0625;
    } else if (unit4 === "ounces") {
      result2 = value3;
    } else if (unit4 === "grams") {
      result2 = value3 * 28.3495;
    } else if (unit4 === "kilograms") {
      result2 = value3 * 0.0283495;
    } else if (unit4 === "tons") {
      result2 = value3 * 0.00003125;
    }
  } else if (unit3 === "grams") {
    if (unit4 === "pounds") {
      result2 = value3 * 0.00220462;
    } else if (unit4 === "ounces") {
      result2 = value3 * 0.035274;
    } else if (unit4 === "grams") {
      result2 = value3;
    } else if (unit4 === "kilograms") {
      result2 = value3 * 0.001;
    } else if (unit4 === "tons") {
      result2 = value3 * 0.00000110231;
    }
  } else if (unit3 === "kilograms") {
    if (unit4 === "pounds") {
      result2 = value3 * 2.20462;
    } else if (unit4 === "ounces") {
      result2 = value3 * 35.274;
    } else if (unit4 === "grams") {
      result2 = value3 * 1000;
    } else if (unit4 === "kilograms") {
      result2 = value3;
    } else if (unit4 === "tons") {
      result2 = value3 * 0.00110231;
    }
  } else if (unit3 === "tons") {
    if (unit4 === "pounds") {
      result2 = value3 * 2000;
    } else if (unit4 === "ounces") {
      result2 = value3 * 32000;
    } else if (unit4 === "grams") {
      result2 = value3 * 907185;
    } else if (unit4 === "kilograms") {
      result2 = value3 * 907.185;
    } else if (unit4 === "tons") {
      result2 = value3;
    }
  }

  document.getElementById("result2").innerHTML = `${value3} ${unit3} = ${result2.toFixed(4)} ${unit4}`;

}

function convert3 () {
  
  var value40 = parseFloat(document.getElementById("value5").value);
  var fromUnit40 = document.getElementById("unit5").value;
  var toUnit40 = document.getElementById("unit6").value;

  // Perform conversion based on units
  if (fromUnit40 === "second") {
    if (toUnit40 === "Minute") {
      var result0 = value40 / 60;
    } else if (toUnit40 === "hour") {
      var result0 = value40 / 3600;
    } else if (toUnit40 === "day") {
      var result0 = value40 / 86400;
    } else if (toUnit40 === "week") {
      var result0 = value40 / 604800;
    } else if (toUnit40 === "Month") {
      var result0 = value40 / 2592000;
    } else if (toUnit40 === "Year") {
      var result0 = value40 / 31536000;
    } else {
      var result0 = value40;
    }
  } else if (fromUnit40 === "Minute") {
    if (toUnit40 === "second") {
      var result0 = value40 * 60;
    } else if (toUnit40 === "hour") {
      var result0 = value40 / 60;
    } else if (toUnit40 === "day") {
      var result0 = value40 / 1440;
    } else if (toUnit40 === "week") {
      var result0 = value40/ 10080;
    } else if (toUnit40 === "Month") {
      var result0 = value40 / 43800;
    } else if (toUnit40 === "Year") {
      var result0 = value40 / 525600;
    } else {
      var result0 = value40;
    }
  } else if (fromUnit40 === "hour") {
    if (toUnit40 === "second") {
      var result0 = value40 * 3600;
    } else if (toUnit4040 === "Minute") {
      var result0 = value40 * 60;
    } else if (toUnit40 === "day") {
      var result0 = value40 / 24;
    } else if (toUnit40 === "week") {
      var result0 = value40 / 168;
    } else if (toUnit40 === "Month") {
      var result0 = value40/ 720;
    } else if (toUnit40 === "Year") {
      var result0 = value40 / 8760;
    } else {
      var result0 = value40;
    }
  } else if (fromUnit40 === "day") {
    if (toUnit40 === "second") {
      var result0 = value40 * 86400;
    } else if (toUnit40 === "Minute") {
      var result0 = value40 * 1440;
    } else if (toUnit40 === "hour") {
      var result0 = value40 * 24;
    } else if (toUnit40 === "week") {
      var result0 = value40 / 7;
    } else if (toUnit40 === "Month") {
      var result0 = value40 / 30.417;
    } else if (toUnit40 === "Year") {
      var result0 = value40 / 365;
    } else {
      var result0 = value40;40
    }
  } else if (fromUnit40 === "week") {
    if (toUnit40 === "second") {
      var result0 = value40 * 604800;
    } else if (toUnit4040 === "Minute") {
      var result0 = value40 * 10080;
    } else if (toUnit40 === "hour") {
      var result0 = value40 * 168;
    } else if (toUnit40 === "day") {
      var result0 = value40 * 7;
    } else if (toUnit40 === "Month") {
      var result0 = value40 * 4;
    } else if (toUnit40 === "Year") {
      var result0 = value40 * 52;
    }
  }
  else if (fromUnit40 === "Month") {
    if (toUnit40 === "second") {
      var result0 = value40 * 2592000;
    } else if (toUnit40 === "Minute") {
      var result0 = value40 * 43800;
    } else if (toUnit40 === "hour") {
      var result0 = value40 * 720;
    } else if (toUnit40 === "day") {
      var result0 = value40 * 30.417;
    } else if (toUnit40 === "week") {
      var result0 = value40 * 4.345;
    } else if (toUnit4040 === "Year") {
      var result0 = value40 / 12;
    } else {
      var result0 = value40;
    }
  } else if (fromUnit40 === "Year") {
    if (toUnit40 === "second") {
      var result0 = value40 * 31536000;
    } else if (toUnit40 === "Minute") {
      var result0 = value40 * 525600;
    } else if (toUnit40 === "hour") {
      var result0 = value40 * 8760;
    } else if (toUnit40 === "day") {
      var result0 = value40 * 365;
    } else if (toUnit40 === "week") {
      var result0 = value40 * 52.143;
    } else if (toUnit40 === "Month") {
      var result0 = value40 * 12;
    } else {
      var result0 = value40;
    }
  } else {
    var result0 = "Invalid input";
  }

  
  document.getElementById("result3").innerHTML = `${value40} ${fromUnit40} = ${result0.toFixed(4)} ${fromUnit40}`;
}
