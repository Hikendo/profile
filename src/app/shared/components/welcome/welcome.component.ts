import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export default class WelcomeComponent {
  public menuFloat= inject(UserService)

  toggleShowMenu( item : string):void{
   // alert(item);

     this.menuFloat.toggleShowMenu(item);



  }
}
