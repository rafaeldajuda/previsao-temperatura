const express = require('express');
const moment = require('moment');
const httpRequest = require('../controllers/httpRequest');
const PrevisaoTempo = require('../model/previsaoTempo');
const path = require('path');
//const pathViews = '/home/rafael/Documentos/Outros/APIs Node/previsao-temperatura/'
const pathViews = '~/previsao-temperatura/'

module.exports = (app) => {
    app.get('/', (req, res) =>{
        //res.sendFile(path.join(__dirname + '/index.html'));
        //res.sendFile(pathViews + "index.html");

        res.status(200).sendFile(__dirname + "/index.html");
    });

    app.get('/temperaturas', (req, res) =>{
        res.header('Acess-Control-Allow-Origin', '*');
        PrevisaoTempo.selectTemperaturas(res);
    });
}