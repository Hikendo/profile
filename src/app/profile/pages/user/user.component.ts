import { Component, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../services/user.service';
import { Profile } from '../../../interfaces/profile';
import { CommonModule } from '@angular/common';
interface MenuProfile{
  nameItem: string;
  describe: string;
  show: boolean;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public menuProfile= signal<MenuProfile[]>([
    {
      nameItem: 'infoUser',
      describe: 'Datos Generales',
      show:true

    },
    {
      nameItem: 'profile',
      describe: 'Perfil Profesional',
      show:false

    },
    {
      nameItem: 'skills',
      describe: 'Experiencia',
      show:false

    },
    {
      nameItem: 'jobs',
      describe: 'Idiomas',
      show:false

    },
    {
      nameItem: 'courses',
      describe: 'Formación Adicional',
      show:false

    },

  ])
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
  toggleShowMenu( item : string):void{
    alert(item);

  }
}
