const APP_DICTIOANRY_EN = {
    weather: ' WEATHER ',
    weatherInCity: 'Weather in city',
    temp: 'Temp',
    humidity: 'Humidity',
    windSpeed: 'Wind speed',
    feelsLike: 'feels like'
};

const APP_DICTIOANRY_RU = {
    weather: ' Погода ',
    weatherInCity: 'Погода в городе',
    temp: 'Температура',
    humidity: 'Влажность',
    windSpeed: 'Скорость ветра',
    feelsLike: 'ощущается как'
};

const setLang = (lang) => {
    if (lang == 'ru') {
        return APP_DICTIOANRY_RU
    }
    return APP_DICTIOANRY_EN;
};

export { setLang };