import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = environment.baseUrl;
  private http= inject(HttpClient);
  private _user= signal<Profile | null>(null);

  public user= computed(() => this._user());
  constructor() { }

  getUser():Observable<Profile>{
    const url:string = `${this.baseUrl}/profile.json`;
    return this.http.get<Profile>(url);
  }
}
