import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-menu-profile',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './menu-profile.component.html',
  styleUrl: './menu-profile.component.css'
})
export class MenuProfileComponent {
  public menuFloat= inject(UserService)
  faMenu= faBars;

  toggleShowMenu( item : string):void{
   // alert(item);

     this.menuFloat.toggleShowMenu(item);



  }
}
