const execa = require('execa');
const express = require("express");
const app = express();
const wifi = require('node-wifi');
const jsonParser = express.json();

function connect(ssid, password){
    console.log(password);
    if(ssid==undefined||password==undefined) return ({status:0, error:"ssid or password not entered"});
    wifi.connect({ssid: ssid, password: password}, () => {
        console.log('Connected');
        return ({status:1}); 
      });   
}

wifi.init({
    iface: null // network interface, choose a random wifi interface if set to null
  });

app.get("/api/scan", function(req, resolve){
    wifi.scan((error, networks) => {
        if (error) {
          resolve.send(error);
          console.log(error);
        } else {
          resolve.send(networks);
        }
      });
        
});

app.get("/api/connect", function(req, resolve){
    console.log(req);
    resolve.send(connect(req.query.ssid, req.query.password)); 
});

app.post("/api/connect", jsonParser, function(req, resolve) {
    resolve.send(connect(req.body.ssid, req.body.password));
});

app.listen(8080, function(){
    console.log("Сервер запущен!");
});