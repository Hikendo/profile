import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, of, tap } from 'rxjs';
import { MenuProfile } from '../interfaces/menu-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = environment.baseUrl;
  private url:string = `${this.baseUrl}/profile.json`;

  public menuProfile= signal<MenuProfile[]>(this.getInitialValueMenu() || [
    {
      nameItem: 'info-user',
      describe: 'Datos Generales',
      show:true

    },
    {
      nameItem: 'abstract',
      describe: 'Perfil Profesional',
      show:false

    },
    {
      nameItem: 'jobs',
      describe: 'Experiencia',
      show:false

    },
    {
      nameItem: 'skills',
      describe: 'Habilidades',
      show:false

    },
    {
      nameItem: 'courses',
      describe: 'Formación Adicional',
      show:false

    },

  ]);

  private http= inject(HttpClient);
  private _user= toSignal(this.connectUser())

  public user= computed(() => this._user());
  constructor() {
    this.connectUser().subscribe();
   }

  private connectUser():Observable<Profile>{
    const url:string = `${this.baseUrl}/profile.json`;
    return this.http.get<Profile>(url);
  }

  public toggleShowMenu( item : string):void{
    // alert(item);
     this.menuProfile.update
     this.menuProfile.update( menuUpdate =>{
         return menuUpdate.map( menu => {

           if (menu.nameItem === item)
             {
               return {...menu, show : true}
             }
             return {...menu, show : false}

           }

         )

     } );
     localStorage.setItem('menuProfile', JSON.stringify( this.menuProfile()));

   }
   private getInitialValueMenu(){
    if (localStorage.getItem('menuProfile')) {
      return JSON.parse(localStorage.getItem('menuProfile')!);
    }
    return null;
   }


}
