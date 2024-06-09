import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ChartComponent} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};
@Component({
  selector: 'app-skills-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './skills-charts.component.html',
  styleUrl: './skills-charts.component.css'
})
export class SkillsChartsComponent{

  @Input() softSkills: string[]=[];
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions> = {
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218
          },
          {
            x: "Kolkata",
            y: 149
          },
          {
            x: "Mumbai",
            y: 184
          },
          {
            x: "Ahmedabad",
            y: 55
          },
          {
            x: "Bangaluru",
            y: 84
          },
          {
            x: "Pune",
            y: 31
          },
          {
            x: "Chennai",
            y: 70
          },
          {
            x: "Jaipur",
            y: 30
          },
          {
            x: "Surat",
            y: 44
          },
          {
            x: "Hyderabad",
            y: 68
          },
          {
            x: "Lucknow",
            y: 28
          },
          {
            x: "Indore",
            y: 19
          },
          {
            x: "Kanpur",
            y: 29
          }
        ]
      }
    ],

    chart: {
      height: 350,
      type: "treemap"
    },
    title: {
      text: "Basic Treemap"
    }
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218
            },
            {
              x: "Kolkata",
              y: 149
            },
            {
              x: "Mumbai",
              y: 184
            },
            {
              x: "Ahmedabad",
              y: 55
            },
            {
              x: "Bangaluru",
              y: 84
            },
            {
              x: "Pune",
              y: 31
            },
            {
              x: "Chennai",
              y: 70
            },
            {
              x: "Jaipur",
              y: 30
            },
            {
              x: "Surat",
              y: 44
            },
            {
              x: "Hyderabad",
              y: 68
            },
            {
              x: "Lucknow",
              y: 28
            },
            {
              x: "Indore",
              y: 19
            },
            {
              x: "Kanpur",
              y: 29
            }
          ]
        }
      ],

      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Basic Treemap"
      }
    };
  }


}
