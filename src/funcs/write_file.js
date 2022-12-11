import fetch from 'node-fetch'
globalThis.fetch = fetch
import fs from 'fs'
globalThis.fs=fs

export function writeFile(body,pathName,extension){
  fs.writeFile(`src/data/${pathName}.${extension}`, JSON.stringify(body), (error) => {
    if (error) throw error;
  });
}