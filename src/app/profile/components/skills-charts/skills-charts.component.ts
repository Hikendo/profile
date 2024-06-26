import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild, inject, signal} from '@angular/core';
import { NgApexchartsModule, ApexChart, ChartComponent} from "ng-apexcharts";
import { InterpersonalSkill, Language, TechnicalSkill } from '../../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ChartApexService } from '../../../services/chart-apex.service';
import { ChartOptions } from '../../../interfaces/chart-options';


@Component({
  selector: 'app-skills-charts',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './skills-charts.component.html',
  styleUrl: './skills-charts.component.css'
})
export class SkillsChartsComponent implements OnInit,OnDestroy{

  @Input() public skillType?: string;
  @Input() public type?: string;
  @Input() public title?: string;

  private user = inject(UserService);
  private chartService = inject(ChartApexService);
  private skills = this.user.user()?.profesionalProfile;
 // public skillCharts= this.skills.map( (skill:InterpersonalSkill) => ({x: skill.softSkill, y: skill.level}));
  public chartSoftSkill?: Partial<ChartOptions>;
  public chartTypes= this.chartService.chartTypes;

  private fb= inject(FormBuilder);

  private skillCharts: unknown= this.skills!.interpersonalSkills.map( (skill:InterpersonalSkill) => ({x: skill.softSkill, y: skill.level}));

  @ViewChild('formElement') formElement?: ElementRef;
  public isFilterVisible: boolean = false;
  public showToolsButtonLabel: string= 'Show Tools';

  constructor(private _eref: ElementRef) {}


  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this._eref.nativeElement.contains(event.target) && this.isFilterVisible) {
      this.showToolsButtonLabel= 'Show Tools';
      this.isFilterVisible = false;
    }
  }
 // public posX: number = 0;
 // public posY: number = 0;



  toggleFilterForm(event: MouseEvent): void {
    event.stopPropagation();
    if(!this.isFilterVisible){
      this.showToolsButtonLabel= 'Hide Tools';
    }
    else{
      this.showToolsButtonLabel= 'Show Tools';
    }
    this.isFilterVisible = !this.isFilterVisible;
   // this.posX = event.clientX + 10;
   // this.posY = event.clientY;
  }
  public softSkillChar: FormGroup= this.fb.group({
    softSkill:['bar',[Validators.required]]
  });
  //signals para que se redebuje la grafica
  public redrawSoftSkill = signal(false) ;

  @ViewChild("chart", { static: false }) chart?: ChartComponent;

  //grafica seleccionada
  public chartSelected: ApexChart  = this.chartService.chartSelected;

  ngOnInit(): void {
   // this.skillCharts= this.buildData(this.skillType!)
   //alert(this.skillType);
   this.skillCharts= this.buildData(this.skillType!)

   this.chartSoftSkill= this.chartService.buildChart(this.chartSelected, this.skillCharts, this.type! , this.title!);
    this.onChangeSoftSkillChartType();
  }

  ngOnDestroy(): void {
  }
  onChangeSoftSkillChartType(){
    this.softSkillChar.get('softSkill')?.valueChanges.pipe(
      tap(() => {
          this.chartSoftSkill!.chart={
            height: 400,
            type:  this.softSkillChar.get('softSkill')?.value
          };
        this.redrawSoftSkill.update(() => true);
        setTimeout(() => this.redrawSoftSkill.update(() => false), 0);
      }),
    ).subscribe();
  }

  buildData(skillType:string){
    const colorComboBar=['#29323F','#838cad']
    if(skillType==="skillSoft"){
      this.chartSelected=  {
        height: 400,
        type: 'treemap'
      };
      return this.skills!.interpersonalSkills.map( (skill:InterpersonalSkill) => ({x: skill.softSkill, y: skill.level}));
    }
    if(skillType==="skillTechnical"){
      this.chartSelected=  {
        height: 400,
        type: 'radar'
      };
      return this.skills!.technicalSkills.map( (skill: TechnicalSkill) => ({x: skill.skill, y: skill.level}));
    }
    return this.skills!.languages.map( (skill: Language, index) => ({name: skill.language, data: [skill.speechLevel, skill.writingLevel,skill.readingLevel], color: colorComboBar[index]}));
  }

}
