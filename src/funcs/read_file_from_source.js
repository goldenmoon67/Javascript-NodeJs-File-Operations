import fetch from 'node-fetch'
globalThis.fetch = fetch
import fs from 'fs'
globalThis.fs=fs


export function readFile(path){
    var rawdata = fs.readFileSync(path);
var json = JSON.parse(rawdata);
return json;
}