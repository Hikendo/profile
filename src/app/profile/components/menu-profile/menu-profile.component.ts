import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faAngleLeft, faBars, faBuildingUser, faChalkboardUser, faClose, faGears, faRotateLeft, faUserGear, faUserTie, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user.service';
import { CommonModule, Location } from '@angular/common';
@Component({
  selector: 'app-menu-profile',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './menu-profile.component.html',
  styleUrl: './menu-profile.component.css'
})
export class MenuProfileComponent {
  public menuFloat= inject(UserService);
  public faMenu= faBars;
  public faBack= faRotateLeft;

constructor(private location: Location, private router: Router,

){}
private itemCurrentUrl='';
  goBack() {
   // console.log(this.itemCurrentUrl);
   this.location.back();
   setTimeout(() => {
    if(this.router.url.includes('/dashboard/profile/')){
      this.itemCurrentUrl =this.router.url.replace('/dashboard/profile/','');
     // console.log(this.itemCurrentUrl);
     this.menuFloat.toggleShowMenu(this.itemCurrentUrl);

    }
  }, 100);

  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.menuFloat.menuProfile())
}
public showText: boolean = true;

  toggleText() {
    this.showText = !this.showText;
  }

  toggleShowMenu( item : string):void{
   // alert(item);

     this.menuFloat.toggleShowMenu(item);



  }
}
