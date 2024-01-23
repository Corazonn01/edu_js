// from Celsius to Fahrenheit and vice versa 
function degreeTemp() {
    let celsius = 23;
    let fahrenheit = 78;
    let fromCel =  ((celsius * 9)/5)+32;
    let fromFah = ((fahrenheit - 32)*5)/9;
    console.log("Now we have " + fromCel + "\u00B0  from Fahrenheit, and " + fromFah + "\u00B0  from Celsius")
}

degreeTemp()
