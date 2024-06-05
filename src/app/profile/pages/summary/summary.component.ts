import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-abstract',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export default class SummaryComponent  {

  public userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user());

  public paragraphs: string[]= this.savedParagraph();
  constructor(

  ){
    this.getParagraphs();
  }
  savedParagraph(){
    if (localStorage.getItem('profesional')) {
      return JSON.parse(localStorage.getItem('profesional')!);
    }
    return [];

  }
  getParagraphs(){
    if (this.user()) {
      this.paragraphs= this.user()!.profesionalProfile.abstract.split(".");
      localStorage.setItem('profesional',JSON.stringify(this.paragraphs))

    }
      console.log(localStorage.getItem('profesional'));
  }
}
