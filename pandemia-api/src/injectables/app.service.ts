import { HttpService } from '@nestjs/axios';
import {  Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
import { lastValueFrom, Observable, toArray } from 'rxjs';


@Injectable()
export class Httpservice {
  constructor(private HttpService: HttpService){}
  
  async getBrUsaData(): Promise<Object[]> {
    const data = this.HttpService.get('https://disease.sh/v3/covid-19/countries/Brazil%2C%20USA');
    const response = await lastValueFrom(data);
    const resdata = response.data
    console.log(response.data);
    return resdata
  }

  async getChinaRussiaData(): Promise<Object[]> {
    const data = this.HttpService.get('https://disease.sh/v3/covid-19/countries/Russia%2CChina');
    const response = await lastValueFrom(data);
    const resdata = response.data
    console.log(response.data);
    return resdata
    
  }

  async getBestserver(): Promise<any>{
    const data = this.HttpService.get('https://api.gofile.io/getServer')
    const response = await lastValueFrom(data);
    const server = response.data.data.server;
    console.log(server)

    return server
  }

}
