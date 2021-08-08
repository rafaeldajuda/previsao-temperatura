const fetch = require('node-fetch');
const schedule = require('node-schedule');
const exec = require('child_process');
const appConfig = require('../config/appConfig');
const httpRequest = require('../controllers/httpRequest');
const moment = require('moment');
const PrevisaoTempo = require('../model/previsaoTempo');

/*
    s    m    h    D    M    DS
*/

const job = schedule.scheduleJob('*/5 * * * *', () => {
    tempo();
});

function tempo() {
    runTempo();
}

function runTempo() {
    const startTime = moment().format();
    const endTime = moment().add(5, 'hour').format();

    const urlRequest = appConfig.url +
        `?location=${appConfig.location}&` +
        `fields=${appConfig.fields}&` +
        `units=${appConfig.units}&` +
        `timezone=${appConfig.timezone}&` +
        `apikey=${appConfig.apikey}&` +
        "timesteps=" + appConfig.timesteps + "&" +
        `startTime=${startTime}&` +
        `endTime=${endTime}`;

        console.log(startTime);

    const metodo = 'GET';
    const body = null;
    const headers = {};

    httpRequest(metodo, urlRequest, body, headers, (status, response) => {
        if (status == 200) {
            PrevisaoTempo.insertPrevisaoTempo(JSON.parse(response));
            console.log(response);
        } else {
            console.log(response);
        }
    });
}

module.exports = job;