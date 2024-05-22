"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const citiesData = [];
let city1 = ["Karachi", 45, "overcast"];
let city2 = ["Islamabad", 38, "sunny"];
let city3 = ["Lahore", 25, "rainy"];
citiesData.push(city1, city2, city3);
const displayWeatherData = (citiesData) => {
    let cityInfo = [];
    citiesData.forEach((citiess) => {
        let [name, celsius, condition] = citiess;
        cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
    });
    console.warn(cityInfo);
};
displayWeatherData(citiesData);
