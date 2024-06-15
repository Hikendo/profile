import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { GalleryComponent } from '../../../shared/components/gallery/gallery.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [LoadingComponent, GalleryComponent],
  templateUrl: './academic-background.component.html',
  styleUrl: './academic-background.component.css'
})
export default class AcademicBackgroundComponent {

  private userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user()?.profesionalProfile.courses);

}
