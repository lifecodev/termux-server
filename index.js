const express = require("express");
const app = express();
const wifi = require('node-wifi');

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

app.listen(8080, function(){
    console.log("Сервер запущен!");
});