import { Injectable } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { tap } from 'rxjs';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  dataLabels?: ApexDataLabels;
  title?: ApexTitleSubtitle;
  plotOptions?: ApexPlotOptions;
  legend?: ApexLegend;
};

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
    if(type==="combo"){
            return {
              series: skillCharts,
              chart: chartSelected,
              title: {
                text: title
              },
              xaxis: {
                categories: this.typeLevelsLang,
              },
              legend: {
                show: true,
                position: 'top'
              },


              yaxis: {
                min: 0 // Esto asegura que la escala del eje Y comience en 0
              }

            };
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
