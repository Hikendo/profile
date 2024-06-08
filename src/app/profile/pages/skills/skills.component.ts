import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from '@coreui/angular-chartjs';

interface MenuSkills{
  id: number;
  typeSkill: string;
  show: boolean;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ChartjsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent {
  private userProfile =inject(UserService);

  public menuSkill:MenuSkills[] =[{typeSkill: 'Habilidades Técnicas',
   show: true, id: 1}, {typeSkill: 'Habilidades Interpersonales', show: false, id: 2},
   {typeSkill: 'Habilidades Lingüísticas', show: false, id: 3}];



  public user=computed(()=> this.userProfile.user());

  public contentSkill: unknown = this.user()!.profesionalProfile.technicalSkills;

  showSkill(id:number){

    this.menuSkill= this.menuSkill.map( m => m.id === id ? { ...m , show : true } : { ...m , show : false });

    if(id!= 1 && this.user()){
      this.contentSkill= this.user()!.profesionalProfile.technicalSkills;
    }
    if(id!= 2 && this.user()){
      this.contentSkill= this.user()!.profesionalProfile.interpersonalSkills;
    }
    if(id!= 3 && this.user()){
      this.contentSkill= this.user()!.profesionalProfile.languages;
    }
    //alert(id);
  }


  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 80, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 60]
      }
    ]
  };

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log('handleChartRef', $chartRef);
      this.data.labels.push('August');
      this.data.datasets[0].data.push(60);
      this.data.datasets[1].data.push(20);
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }
}
