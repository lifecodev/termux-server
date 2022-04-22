const Wifi_Termux = require("./termux/wifi")
var Wifi_Termux = new Wifi_Termux()
Wifi_Termux.Scan()
console.log(Wifi_Termux.getWifiInfo())