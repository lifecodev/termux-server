import {execa} from 'execa';

const { stdout } = await execa("echo", ['Hello World!'])
console.log(stdout)