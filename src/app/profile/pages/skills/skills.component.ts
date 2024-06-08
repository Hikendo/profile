import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';

interface MenuSkills{
  id: number;
  typeSkill: string;
  show: boolean;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent {
  private userProfile =inject(UserService);

  public menuSkill:MenuSkills[] =[{typeSkill: 'Habilidades Técnicas',
   show: true, id: 1}, {typeSkill: 'Habilidades Interpersonales', show: false, id: 2},
   {typeSkill: 'Habilidades Lingüísticas', show: false, id: 3}];

   showDiv = {
    previous : false,
    current : false,
    next : false
  }

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
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };
}
