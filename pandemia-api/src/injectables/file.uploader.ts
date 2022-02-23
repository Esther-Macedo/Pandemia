import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Httpservice } from "./app.service";
import { createReadStream, readFileSync} from "fs";
//só funcionou assim
import * as FormData from 'form-data'




@Injectable()
export class SendFile {
  constructor( private http:HttpService, private hs: Httpservice){}
 async sendToBrUsa(){
   //pegar o server disponível
    const server = await this.hs.getBestserver() 
    const streamedFile = createReadStream( './src/csv/brusa.csv');

    console.log(server)
    let formData = new FormData()
    formData.append('file', streamedFile);
    //acho que usar o token assim está errado?
    formData.append('token','tokentokentoken')
    formData.append('folderId','a87930fd-b9a1-4e33-a295-f5957f742452')
    
    console.log(`https://${server}.gofile.io/uploadFile`)
    const serv = this.http.post(`https://${server}.gofile.io/uploadFile`,formData);
   
    console.log('foi?')
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