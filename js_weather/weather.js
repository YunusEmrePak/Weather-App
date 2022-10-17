class Weather {
    constructor(degree, day, wind, humidity, precipitation, date) {
        this.degree = degree;
        this.day = day;
        this.wind = wind;
        this.humidity = humidity;
        this.precipitation = precipitation;
        this.date = date;
    }

}

const weatherList = [
    new Weather("29", "Monday", "11", "49", "0", "July 25 2022"),
    new Weather("28", "Tuesday", "14", "59", "40", "July 26 2022"),
    new Weather("27", "Wednesday", "13", "60", "10", "July 27 2022"),
    new Weather("22", "Thursday", "16", "30", "86", "July 28 2022")
]
