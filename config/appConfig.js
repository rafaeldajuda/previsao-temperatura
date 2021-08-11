/*
    DEFAULT CONFIGURATIONS
*/ 

const prodConfig = { 
    port: 3000,
    location: "-23.027722192329534,-45.55901857432534",
    fields: "temperature",
    timesteps: "1h",
    units: "metric",
    timezone: "Brazil/East",
    apikey: "6yFuIlZkJ3iSFFIxht6hxnJOKqEJfmkq",
    url: "https://api.tomorrow.io/v4/timelines",
    local: "taubate",
    app: {
        path_index: "/app/"
    }
}

const devConfig = {
    port: 3000,
    location: "-23.027722192329534,-45.55901857432534",
    fields: "temperature",
    timesteps: "1h",
    units: "metric",
    timezone: "Brazil/East",
    apikey: "6yFuIlZkJ3iSFFIxht6hxnJOKqEJfmkq",
    url: "https://api.tomorrow.io/v4/timelines",
    local: "taubate",
    app: {
        path_index: "/home/rafael/Documentos/Outros/APIs Node/previsao-temperatura/"
    }
}

module.exports = prodConfig