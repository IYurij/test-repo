import chalk from 'chalk';
import dedent from 'dedent-js';
import { setLang } from '../helpers/langs.helper.js';


const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without params - weather
        -h - view help
        -t [API_KEY] - set token
        -s [CITY] - add city
        -l [LANG] - set language by language code (ru or en only), optional, default - english)
        `
    );
};

const printWeather = (res, icon, lang) => {
    const dict = setLang(lang);
    console.log(
        dedent`${chalk.bgYellow(dict.weather)} ${dict.weatherInCity} ${res.name}
        ${icon}  ${res.weather[0].description}
        ${dict.temp}: ${res.main.temp}C (${dict.feelsLike} ${res.main.feels_like}C)
        ${dict.humidity}: ${res.main.humidity}%
        ${dict.windSpeed}: ${res.wind.speed}m/s
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };