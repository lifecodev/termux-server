const execa = require('execa')

class Wifi_Termux {
    constructor()
    {
        this.wifi_info = []
    }
    parser (stdout) 
    {
        return stdout 
    }
    Scan()
    {
        execa("termux-wifi-scanifno", []).then(function (result) {
            if (result.stderr) return reject(result.stderr)
            wifi_info = this.parser(result.stdout)
        }).catch(function (error) {
            console.error("Error: "+error)
        })
    }
    getWifiInfo()
    {
        return this.wifi_info
    }

}
module.exports = Wifi_Termux