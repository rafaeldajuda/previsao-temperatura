const customExpress = require('./config/customExpress');
const appConfig = require('./config/appConfig');
const dbConnection = require('./infraestrutura/dbConnection');
const PrevisaoTabelas = require('./infraestrutura/createTablePrevisaoTabela');
const callAPIs = require('./controllers/callAPIs');

//START DB CONNECTION
dbConnection.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('db connection successful');
        PrevisaoTabelas.init(dbConnection);
        PrevisaoTabelas.createPrevisaoTempo();

        //START SERVER - PORT
        const app = customExpress();
        app.listen(process.env.PORT || appConfig.port, () => {
            console.log('SERVER RUN PORT ' + (process.env.PORT || appConfig.port));
        });
        callAPIs;
    }
})

setInterval(function () {
    dbConnection.query('SELECT 1');
}, 60000);









