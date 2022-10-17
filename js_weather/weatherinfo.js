class WeatherInfo {
    constructor(weatherList) {
        this.weatherList = weatherList;
        this.index = 0;
    }

    getInfo = () => {
        return this.weatherList[this.index];
    }

    next = () => {
        if (this.index + 1 != this.weatherList.length) {
            this.index++;
        }
        else {
            this.index = 0;
        }
    }

    prev = () => {
        if(this.index != 0) {
            this.index--;
        }
        else {
            this.index = this.weatherList.length - 1;
        }
    }
    
    control = () => {
        if (this.index == 1){
            cloud.classList.remove("fa-sun");
            cloud.classList.add("fa-cloud");
        }
        else {
            cloud.classList.remove("fa-cloud");
            cloud.classList.add("fa-sun");
        }     
    }
}
