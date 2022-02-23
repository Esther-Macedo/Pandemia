import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Httpservice } from "./app.service";
import { createReadStream, readFileSync } from "fs";
//só funcionou assim
import * as FormData from 'form-data'
import { lastValueFrom, map } from "rxjs";
import * as fs from 'fs'
import axios from 'axios';
import readfileHelper from "./readfile.helper";
import { token } from "src/token.config";




@Injectable()
export class SendFile {
  constructor(private http: HttpService, private hs: Httpservice) { }

  async sendToBrUsa(filePath: string, folderId:string, filename:string) {
    //pegar o server disponível
    try {
      const server = await this.hs.getBestserver() 
    let streamedFile = await readfileHelper(filePath)
    console.log(streamedFile);


    let formData = new FormData();
    formData.append('file', streamedFile, filename);
    //acho que usar o token assim está errado?
    formData.append('token', token.token);
    formData.append('folderId', folderId);





    const response = await axios.post(`https://store4.gofile.io/uploadFile`, formData, { headers: formData.getHeaders() })
    console.log(response);
    } catch (error) {
      console.log(error.response.data)
    }
    

    //const serv = this.http.post(`https://${server}.gofile.io/uploadFile`, formData).pipe(map(res => { return console.log(res.status) }));
    /* const p = await lastValueFrom(serv)
    console.log(p.status, p.statusText); */
    console.log('foi?');
  }


}

/* @Injectable()
export class csv{

    constructor( obj : ObjectsToCsv){}

    async toscvBRUSA(foo: any) {
      const data = await foo
      const crv = this.obj
      crv.toDisk('/teste.csv')
      console.log('ei vc é do balacobaco')
    }
} */