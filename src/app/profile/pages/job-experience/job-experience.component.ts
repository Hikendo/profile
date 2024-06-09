import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { WorkExperience } from '../../../interfaces/profile';

interface MenuJobs{
  date: string;
  show: boolean;
}
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './job-experience.component.html',
  styleUrl: './job-experience.component.css'
})
export default class JobExperienceComponent implements OnInit{
  ngOnInit(): void {
  //  this.showJob('2023');
    this.setJobListLocalStorage();
  console.log(this.jobList);
  }


  private userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user());

  public jobList= this.getJobListLocalStorage();


  getJobListLocalStorage(){
    if (localStorage.getItem('dateShowTab')) {
      return JSON.parse(localStorage.getItem('dateShowTab')!);
    }
    return [];

  }
  setJobListLocalStorage(){
    if (this.user()) {
      this.jobList = this.user()!.profesionalProfile.workExperience.map((date: WorkExperience, index) =>
        index > 0 ? {...date, 'show': false }: {...date,  'show': true });
      localStorage.setItem('dateShowTab',JSON.stringify(this.jobList));
    }
  }


  showJob(endDate : string){
     this.jobList = this.user()!.profesionalProfile.workExperience.map((date: WorkExperience) =>
      endDate===date.endDate ?{...date, 'show': true }: {...date, 'show': false });
       // alert('hy')
       console.log(this.jobList);
  }

}
