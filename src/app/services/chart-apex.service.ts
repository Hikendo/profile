import { Injectable } from '@angular/core';
import { ApexChart, ApexDataLabels } from 'ng-apexcharts';
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
              },
             plotOptions:{
              bar: {
                distributed: false,
                horizontal: true,
              }
             }

        }
      }

        return {
          series: [
            {
              data: skillCharts,
              color:'#29323F'
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
          markers: {
            colors: ['#F47B20']
          },
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false,
              colorScale:{

                ranges: [
                  {
                    from: 0,
                    to: 69,
                    color: '#3b4455'
                  },
                  {
                    from: 70,
                    to: 90,
                    color: '#838cad'
                  },
                  {
                    from: 90,
                    to: 95,
                    color: '#5f6881'
                  },
                  {
                    from: 95,
                    to: 100,
                    color: '#29323F'
                  }
                ],
              }
            },
            bar: {
              distributed: false,
              horizontal: true,
              colors:{
                ranges: [
                  {
                    from: 0,
                    to: 25,
                    color: '#e0f7fa'
                  },
                  {
                    from: 25,
                    to: 50,
                    color: '#b2ebf2'
                  },
                  {
                    from: 50,
                    to: 70,
                    color: '#29323E'
                  },
                  {
                    from: 70,
                    to: 100,
                    color: '#29323F'
                  }
                ]
              }
            },


          },

        };
  }

}
