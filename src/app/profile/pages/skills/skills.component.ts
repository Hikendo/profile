import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent {
  private userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user());
}
