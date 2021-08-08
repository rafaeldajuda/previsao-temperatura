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

const job = schedule.scheduleJob('*/1 * * * *', () => {
    tempo();
});

function tempo() {
    runTempo();
}

function runTempo() {
    const startTime = moment().subtract(3, 'hour').format();
    const endTime = moment().subtract(3, 'hour').add(5, 'hour').format();

    //FORMATAR DATAS
    if(startTime.search('\\+') != -1){
        startTime = startTime.substring(0, 19);
    }
    if(endTime.search('\\+') != -1){
        endTime = startTime.substring(0, 19);
    }


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
        console.log(endTime);

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