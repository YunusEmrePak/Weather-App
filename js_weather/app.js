const card = document.querySelector(".card");
const text = document.querySelector(".text");
const degree = document.querySelector(".degree");
const km = document.querySelector(".km");
const hum = document.querySelector(".hum");
const prec = document.querySelector(".prec");
const date = document.querySelector(".date");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cloud = document.querySelector(".img .fa-sun")


const info = new WeatherInfo(weatherList);

window.addEventListener("load", () => {
    let weather = info.getInfo();
    displayWeather(weather);
});

displayWeather = (weather) => {
    text.innerText = weather.day;
    degree.innerText = weather.degree + "°";
    km.innerText = weather.wind + "km";
    hum.innerText = weather.humidity + "%";
    prec.innerText = weather.precipitation + "%";
    date.innerText = weather.date;
}

prev.addEventListener("click", () => {
    prevDay();
});

prevDay = () => {
    info.prev();
    let weather = info.getInfo();
    info.control();
    displayWeather(weather);
}

next.addEventListener("click", () => {
    nextDay();
})

nextDay = () => {
    info.next();
    let weather = info.getInfo();
    info.control();
    displayWeather(weather);
}
