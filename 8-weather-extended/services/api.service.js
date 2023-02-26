import axios from 'axios';
import { getKeyValue, APP_DICT } from './storage.service.js';

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '🌤️';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
        default:
            return '';
        }
};

const getWeather = async (city, lang = 'en') => {
    const token = process.env.TOKEN ?? await getKeyValue(APP_DICT.token);
    if (!token) {
        throw new Error('Token was not set. Use -t [API_KEY] for set it.');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            units: 'metric',
            lang
        }
    });
    return data;
};

export { getWeather, getIcon };