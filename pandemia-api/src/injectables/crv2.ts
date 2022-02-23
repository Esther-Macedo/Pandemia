import { Injectable } from "@nestjs/common";
import {createObjectCsvWriter} from 'csv-writer'
import { title } from "process";
import { Httpservice } from "./app.service";



@Injectable()
export class Csv2 {
  constructor( private http:Httpservice ){}
  

  async WriteCsvBRUSA () {
   const c = createObjectCsvWriter({
        path: './src/csv/brusa.csv',
        header: 
        [
            {id:'country', title:'country'},
            {id:'cases', title:'cases'}, 
            {id:'todaycases',title:'todayCases'},
            {id:'deaths', title:'deaths'}, 
            {id:'todayDeaths',title:'todayDeaths'},
            {id:'recovered', title:'recovered'},
            {id:'active', title:'active'},
            {id:'critical', title:'critical'},
            {id:'tests', title:'tests'}
          ]
    })
       const object = await this.http.getBrUsaData()
       c.writeRecords(object)
       console.log('lesgo rodando')
  }
  async WriteCHINARUSSIA() {
        const c = createObjectCsvWriter({
            path: './src/csv/chinarussia.csv',
            header: 
            [
                {id:'country', title:'country'},
                {id:'cases', title:'cases'}, 
                {id:'todaycases',title:'todayCases'},
                {id:'deaths', title:'deaths'}, 
                {id:'todayDeaths',title:'todayDeaths'},
                {id:'recovered', title:'recovered'},
                {id:'active', title:'active'},
                {id:'critical', title:'critical'},
                {id:'tests', title:'tests'}
            ]
        })
        const object = await this.http.getChinaRussiaData()
        c.writeRecords(object) 
        console.log('lesgo rodando')

    
    }
  
}