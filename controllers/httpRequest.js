const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function httpRequest(metodo, url, body, headers, callback){
    const xhr = new XMLHttpRequest();

    //OPEN CONNECTION
    xhr.open(metodo, url);
    
    //ADD HEADERS
    for(var h in headers){
        xhr.setRequestHeader(h, headers[h]);
    }

    //res.status(200).json(url);

    //SEND REQUEST
    xhr.send(body);

    xhr.addEventListener('load', () => {
        callback(xhr.status, xhr.responseText);
    });
    

}

module.exports = httpRequest;