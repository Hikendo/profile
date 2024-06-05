import { Component, inject, signal } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import  UserComponent  from '../../pages/user/user.component';
import SummaryComponent from '../../pages/summary/summary.component';
import JobExperienceComponent from '../../pages/job-experience/job-experience.component';
import SkillsComponent from '../../pages/skills/skills.component';
import AcademicBackgroundComponent from '../../pages/academic-background/academic-background.component';
import { UserService } from '../../../services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faBars, faClose } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, UserComponent, SummaryComponent,
     JobExperienceComponent, SkillsComponent, AcademicBackgroundComponent, UserComponent, FontAwesomeModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent {
  public menuFloat= inject(UserService)
  faMenu= faBars;

  toggleShowMenu( item : string):void{
   // alert(item);

     this.menuFloat.toggleShowMenu(item);



  }
}
