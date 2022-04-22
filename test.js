import execa from 'execa'

execa("termux-wifi-scanifno", []).then(function (result) {
    if (result.stderr) return reject(result.stderr)
    console.log(result.stdout)
}).catch(function (error) {
    console.error("Error: "+error)
})