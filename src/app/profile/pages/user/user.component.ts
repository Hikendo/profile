import { Component, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../services/user.service';
import { Profile } from '../../../interfaces/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  public user=signal<Profile | null>(null);
  public userProfile =inject(UserService);
  constructor(){

      this.getUser()

  }
  getUser(): void{
    this.userProfile.getUser().subscribe(data=>{
      this.user.update(()=> data)
      console.log(data)});
  }

}
