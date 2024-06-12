import { Component, Input, OnInit, ViewChild, inject} from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ChartComponent} from "ng-apexcharts";
import { InterpersonalSkill } from '../../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  dataLabels?: ApexDataLabels;
  title?: ApexTitleSubtitle;
  plotOptions?: ApexPlotOptions;
  legend?: ApexLegend;
};
@Component({
  selector: 'app-skills-charts',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './skills-charts.component.html',
  styleUrl: './skills-charts.component.css'
})
export class SkillsChartsComponent{

  public user = inject(UserService);
public softSkills = this.user.user()?.profesionalProfile.interpersonalSkills;
 // public skillCharts= this.softSkills.map( (skill:InterpersonalSkill) => ({x: skill.softSkill, y: skill.level}));
  public chartOptions?: Partial<ChartOptions>;

  constructor() {
    this.chartOptions= this.buildChart();

  }
  buildChart(): Partial<ChartOptions>{
    const skillCharts= this.softSkills!.map( (skill:InterpersonalSkill) => ({x: skill.softSkill, y: skill.level}));

    return {
      series: [
        {
          data: skillCharts
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 600,
        type: "treemap"
      },
      title: {
        text: "Interpersonal Skills"
      },
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }

    };
  }

}
