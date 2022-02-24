import { Controller, Get, Res } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { response, Response } from 'express';
import { Httpservice } from './injectables/app.service';
import { Csv2 } from './injectables/crv2';
import { SendFile } from './injectables/file.uploader';
@Controller()
export class AppController {
  constructor(private csv: Csv2, private send: SendFile) {}

  @Cron('0 8,22 * * *')
teste(){

    console.log('na tonga da mironga')
    //gerar data
    const date= new Date();
    let d = date.getDate();
    let m = (date.getMonth()+1);
    let y = date.getFullYear();

    let todayis = d +'-'+ m +'-'+ y+'.crv'
    

    //gerar csv br-usa
    this.csv.WriteCsvBRUSA()
    //gerar csv china-russia
    this.csv.WriteCHINARUSSIA()
    
    //upar file
    this.send.sendToBrUsa('./src/csv/brusa.csv','a87930fd-b9a1-4e33-a295-f5957f742452','brusa'+todayis)
    
    //gerar csv china-russia
    
    //upar china e russia
    this.send.sendToBrUsa('./src/csv/brusa.csv','92c5eec9-2bbd-489a-bef2-30e7a46bc052', 'chinarussia'+todayis)
    
  }
  
}
