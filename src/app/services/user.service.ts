import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Course, Profile } from '../interfaces/profile';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, of, tap } from 'rxjs';
import { MenuProfile } from '../interfaces/menu-profile';
import { faAddressCard, faBuildingUser, faChalkboardUser, faUser, faUserGear, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = environment.baseUrl;



  public menuProfile= signal<MenuProfile[]>( [
    {
      nameItem: 'info-user',
      describe: 'Datos Generales',
      faIcon: faAddressCard,
      show:true


    },
    {
      nameItem: 'abstract',
      describe: 'Perfil Profesional',
      faIcon: faUserTie,
      show:false


    },
    {
      nameItem: 'jobs',
      describe: 'Experiencia',
      faIcon: faBuildingUser,
      show:false


    },
    {
      nameItem: 'skills',
      describe: 'Habilidades',
      faIcon: faUserGear,
      show:false

    },
    {
      nameItem: 'courses',
      describe: 'Formación Adicional',
      faIcon: faChalkboardUser,
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
     this.menuProfile.update( menuUpdate =>{
         return menuUpdate.map( menu => {

           if (menu.nameItem === item)
             {
              console.log({menu})
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
