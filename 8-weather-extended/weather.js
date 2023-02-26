#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather, getIcon } from "./services/api.service.js";
import { printHelp, printError, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, APP_DICT, getKeyValue } from "./services/storage.service.js";


const saveToken = async (token) => {
    if (!token.length) {
        printError('Token was not send!');
        return;
    }
    try {
        await saveKeyValue(APP_DICT.token, token);
        printSuccess('Token saved');
    } catch(e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('City was not send!');
        return;
    }
    try {
        await saveKeyValue(APP_DICT.city, city);
        printSuccess('City saved');
    } catch(e) {
        printError(e.message);
    }
};

const saveLanguage = async (lang) => {
    if (!lang.length || !(lang == 'ru' || lang == 'en')) {
        printError('Language are incorrect!');
        return;
    }
    try {
        await saveKeyValue(APP_DICT.lang, lang);
        printSuccess('Language saved');
    } catch(e) {
        printError(e.message);
    }
};

const getForecast = async () => {
    try {
        const cities = await getKeyValue(APP_DICT.city);
        const lang = await getKeyValue(APP_DICT.lang);
        for (const city of cities) {
            const weather = await getWeather(city, lang);
            printWeather(weather, getIcon(weather.weather[0].icon), lang);
        }
    } catch(e) {
        if (e?.response?.status == 404) {
            printError('City not correct defined.');
        } else if (e?.response?.status == 401) {
            printError('Token not correct defined.');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    if (args.l) {
        return saveLanguage(args.l);
    }
    return getForecast();
};

initCLI();