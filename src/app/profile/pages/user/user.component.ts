import { Component, computed, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../services/user.service';
import { Profile } from '../../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {
  public userProfile =inject(UserService);


  public user=computed(()=> this.userProfile.user());
  constructor(){

//this.getUser();
  }
  getUser(): void{
    /*this.userProfile.user().subscribe(data=>{
      this.user.update(()=> data)
      console.log(data)});
      */
     console.log(this.user())
  }


}
