const express = require('express');
const moment = require('moment');
const httpRequest = require('../controllers/httpRequest');
const PrevisaoTempo = require('../model/previsaoTempo');
const appConfig = require('../config/appConfig')
//const path = require('path');
//const pathViews = '/home/rafael/Documentos/Outros/APIs Node/previsao-temperatura/'
//const pathViews = '/app/'

module.exports = (app) => {
    app.get('/', (req, res) =>{
        //res.sendFile(path.join(__dirname + '/index.html'));
        //res.sendFile(pathViews + "index.html");

        res.status(200).sendFile(appConfig.app.path_index + "index.html");
    });

    app.get('/temperaturas', (req, res) =>{
        res.header('Acess-Control-Allow-Origin', '*');
        PrevisaoTempo.selectTemperaturas(res);
    });
}