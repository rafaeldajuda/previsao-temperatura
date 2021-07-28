const fetch = require('node-fetch');
const schedule = require('node-schedule');

/*
    s    m    h    D    M    DS
*/ 

const job = schedule.scheduleJob('* */5 * * *', () =>{
    tempo();
});

function tempo() {
    fetch('http://localhost:3000/tempo');
}

module.exports = job;