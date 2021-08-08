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

const job = schedule.scheduleJob('0 */5 * * *', () => {
    tempo();
});

function tempo() {
    runTempo();
}

function runTempo() {
    var startTime = moment().subtract(3, 'hour').format();
    var endTime = moment().add(1, 'hour').format();

    //FORMATAR DATAS
    if(startTime.search('\\+00') != -1){
        startTime = startTime.replace('+00', '-03');
    }
    if(endTime.search('\\+00:00') != -1){
        endTime = endTime.replace('+00', '-03');
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

        //console.log(startTime);
        //console.log(endTime);
        //console.log(urlRequest);

    const metodo = 'GET';
    const body = null;
    const headers = {};

    httpRequest(metodo, urlRequest, body, headers, (status, response) => {
        if (status == 200) {
            PrevisaoTempo.insertPrevisaoTempo(JSON.parse(response));
            //console.log(response);
        } else {
            //console.log(response);
        }
    });

}

module.exports = job;