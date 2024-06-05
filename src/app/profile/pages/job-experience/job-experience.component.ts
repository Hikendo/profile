import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './job-experience.component.html',
  styleUrl: './job-experience.component.css'
})
export default class JobExperienceComponent {


  private userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user());

}
