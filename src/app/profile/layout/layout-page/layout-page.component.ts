import { Component, signal } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserComponent } from '../../pages/user/user.component';
interface MenuProfile{
  nameItem: string;
  describe: string;
  show: boolean;
}
@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, UserComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent {
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

  ]);
  toggleShowMenu( item : string):void{
    alert(item);

  }
}
