import * as fs from 'fs'
export default async (file)=>
new Promise((resolve, reject)=> {
    let readfile = '';
    const stream = fs.createReadStream(file,{ encoding: 'utf-8'});

    stream.on('data', (chunk) => {readfile += chunk});
    stream.on('end', ()=> resolve(readfile));
    stream.on('error', (error) => reject(error));
}) 