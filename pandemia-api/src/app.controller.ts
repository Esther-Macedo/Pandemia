import { Controller, Get, Res } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { response, Response } from 'express';
import { Httpservice } from './injectables/app.service';
import { Csv2 } from './injectables/crv2';
import { SendFile } from './injectables/file.uploader';
@Controller()
export class AppController {
  constructor(private csv: Csv2, private send: SendFile, http: Httpservice) {}

  @Cron(CronExpression.EVERY_MINUTE)
  teste(){

    console.log('na tonga da mironga')
    //gerar csv e fazer o upload do brusa.csv
    this.csv.WriteCsvBRUSA()
    this.send.sendToBrUsa()
    //gerar csv china-russia
    this.csv.WriteCHINARUSSIA()
    console.log('do cabulete')
  }

  
    
    
  
  
  
}
