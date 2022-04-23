import {execa} from 'execa';
try {
    const { stdout, stderr } = await execa("termux-wifi-scaninfo", [])
    var arr = JSON.parse(stdout)
    console.log({arr, stderr})
} catch (error) {
    console.error( `ERROR: The command failed. stderr: ${error.stderr} (${error.exitCode})`)
}

