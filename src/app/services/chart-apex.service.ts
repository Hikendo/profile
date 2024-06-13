import { Injectable } from '@angular/core';
import {  ApexChart } from 'ng-apexcharts';
import { ChartOptions } from '../interfaces/chart-options';


@Injectable({
  providedIn: 'root'
})
export class ChartApexService {
  public chartTypes=[ 'bar', 'line', 'area', 'radar', 'treemap'];
  public chartSelected: ApexChart  = {
    height: 400,
    type: 'bar'
  };
  constructor() { }
  private typeLevelsLang: string[]=["Speech","Writing","Reading"]

  buildChart(chartSelected: ApexChart, skillCharts:any, type: string, title:string): Partial<ChartOptions>{
    console.log({skillCharts});
    console.log([this.typeLevelsLang]);
    if(type==="combo"){
            return {
              series: skillCharts,
              chart: chartSelected,
              title: {
                text: title
              },

              stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
              },
              xaxis: {
                categories: this.typeLevelsLang
              },
              yaxis:{
                min:0
              }
        }
      }

        return {
          series: [
            {
              data: skillCharts
            }
          ],
          legend: {
            show: true
          },
          chart: chartSelected,
          title: {
            text: title
          },
          yaxis: {
            min: 0 // Esto asegura que la escala del eje Y comience en 0
          },
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false
            }
          },

        };
  }

}
