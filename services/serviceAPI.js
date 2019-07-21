export default class ServiceAPI {


    getResourceT( _url, _body ) {

        return new Promise(function(resolve, reject){
            
            let request = new XMLHttpRequest();
            let jsonData;

            request.open("POST", _url);

            request.setRequestHeader("Content-type", "application/json");

            request.onload = function () {
                if (request.status === 200 && request.readyState === 4) {
                    jsonData = JSON.parse(request.responseText);
                    resolve(jsonData);
                } else {
                    //console.log(request.status);
                    reject(request.status);
                }
            }
            request.onerror = function (error) {
                //console.log(error);
                //console.log("Неверный путь или доступ к серверу отсутствует");
                reject(error);
            }
            request.send(_body);
        });
        
    }



    getResource = async ( _url, _body ) => {

        const res = await fetch( _url, _body );

        if( !res.ok ){

            throw new Error(`Cloud not fetch ${_url}, recevid ${res.status}`);
            //return res.status;

        }

        const body = await res.json();

        return body;

    };

    postAPI( _url, _body ) {

        return this.getResource( _url, _body );

    };

    postLogin( _url, _body ) {

        return this.getResource( _url, _body );

    };

    postLoginT( _url, _body ) {

        return this.getResourceT( _url, _body );

    };

}