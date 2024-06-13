import {  Component,  OnInit,  computed, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { SkillsChartsComponent } from '../../components/skills-charts/skills-charts.component';

interface MenuSkills{
  id: number;
  typeSkill: string;
  show: boolean;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LoadingComponent ,SkillsChartsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent implements OnInit {
  private userProfile =inject(UserService);
  public user=computed(()=> this.userProfile.user() || this.getStorageUser());

    constructor(){
      this.saveStorageUser();
    }

  ngOnInit(): void {
  }
  getStorageUser(){
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')!);
    }
    return [];
  }
  saveStorageUser(){
    if (this.user()) {
      localStorage.setItem('user',JSON.stringify(this.user()));
    }
  }



}
