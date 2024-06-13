import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  public menuFloat= inject(UserService)

  toggleShowMenu( item : string):void{
   // alert(item);

     this.menuFloat.toggleShowMenu(item);



  }
}
