import {execa} from 'execa';

const {stdout} = execa("echo", ['Hello World!'])
console.log(stdout)