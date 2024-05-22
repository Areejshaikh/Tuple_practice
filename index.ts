type WeatherData = readonly[string, number,string]

const citiesData: any[] = [];

let city1 : WeatherData = ["Karachi" , 45 , "overcast" ]
let city2 : WeatherData = ["Islamabad" , 38 , "sunny" ]
let city3 : WeatherData = ["Lahore" , 25 , "rainy" ]


citiesData.push(city1, city2,city3);
const displayWeatherData = (citiesData:WeatherData[]) => {
    let cityInfo: object[] = [];
    citiesData.forEach((citiess) => {
        let [name, celsius, condition] = citiess;
        cityInfo.push({ City: name, Temperature: celsius, Condition: condition });
    })
    console.warn(cityInfo);

}
displayWeatherData(citiesData);