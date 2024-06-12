import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, computed, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { SkillsChartsComponent } from '../../components/skills-charts/skills-charts.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Language, TechnicalSkill } from '../../../interfaces/profile';
import { tap } from 'rxjs';
import { ChartType } from 'chart.js';

interface MenuSkills{
  id: number;
  typeSkill: string;
  show: boolean;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ChartjsComponent ,SkillsChartsComponent, ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent implements OnInit {
  private userProfile =inject(UserService);

  public menuSkill:MenuSkills[] =[{typeSkill: 'Habilidades Técnicas',
   show: true, id: 1}, {typeSkill: 'Habilidades Interpersonales', show: false, id: 2},
   {typeSkill: 'Habilidades Lingüísticas', show: false, id: 3}];



  public user=computed(()=> this.userProfile.user() || this.getStorageUser());

    constructor(){
      this.saveStorageUser();
    }

  public charTypeOptions=['bar', 'line','radar','doughnut', 'polarArea']

  private fb= inject(FormBuilder);


  public mySelectChar: FormGroup= this.fb.group({
    char:['bar',[Validators.required]]
  });
  public redraw = signal(false) ;

 public chartSelected: ChartType  = 'bar';
  ngOnInit(): void {
    this.onChangeChartType();
  }



  onChangeChartType(){
    this.mySelectChar.get('char')?.valueChanges.pipe(
      tap(() => {this.chartSelected=this.mySelectChar.get('char')?.value;
        this.redraw.update(() => true);

        setTimeout(() => this.redraw.update(() => false), 0);

            this.menuSkill= this.menuSkill.map( m =>{ return { ...m , show : !m.show }});
            this.menuSkill= this.menuSkill.map( m =>{ return { ...m , show : !m.show }});

      }),
    ).subscribe();
  }

  getStorageUser(){
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')!);
    }
    return [];
  }
  saveStorageUser(){
    if (this.user()) {
      localStorage.setItem('user',JSON.stringify(this.user()));
    }
  }

  showSkill(id:number){
    this.menuSkill= this.menuSkill.map( m => m.id === id ? { ...m , show : true } : { ...m , show : false });
  }

  public technicalLabel= this.user()?.profesionalProfile.technicalSkills.map(
    (skill: TechnicalSkill) => skill.skill
  );
  public technicalLevel= this.user()?.profesionalProfile.technicalSkills.map(
    (skill : TechnicalSkill )=> skill.level
  );


//  public languageLabels= Object.entries(this.user()?.profesionalProfile.languages!);

  public languageDataSet= this.user()?.profesionalProfile.languages.map(
    (language: Language)=> language.language
  );


  public languageLevels= this.user()?.profesionalProfile.languages.map(
    (lang: Language)=> [lang.speechLevel, lang.writingLevel, lang.readingLevel]
  );
  public technicalChart = {
    labels:this.technicalLabel!,
    datasets: [
      {
        label: 'Level' ,
        backgroundColor: 'rgb(240, 128, 128, 0.4)',
        borderColor: 'rgba(20, 20, 20, 1)',
        pointBackgroundColor: 'rgba(20, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: this.technicalLevel!
      }
    ],

  };

  public options = {
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        beginAtZero: true
      },
      r: {

          beginAtZero: true,
          min: 0 // Asegura que la escala comience en 0

      }
    }
  };

  private typeLevelsLang: string[]=['Speech','Writing','Reading']
  public languagesChart = {
    labels:this.typeLevelsLang!,
    datasets: [
      {
        label: this.languageDataSet![0] ,
        backgroundColor: 'rgb(240, 128, 128, 0.9)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: this.languageLevels![0]
      },
      {
        label: this.languageDataSet![1] ,
        backgroundColor: 'rgb(175, 122, 197 , 0.9)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: this.languageLevels![1]
      }
    ]
  };

}
