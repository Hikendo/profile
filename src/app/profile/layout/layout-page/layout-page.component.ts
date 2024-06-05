import { Component, inject, signal } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import  UserComponent  from '../../pages/user/user.component';
import SummaryComponent from '../../pages/summary/summary.component';
import JobExperienceComponent from '../../pages/job-experience/job-experience.component';
import SkillsComponent from '../../pages/skills/skills.component';
import AcademicBackgroundComponent from '../../pages/academic-background/academic-background.component';
import { UserService } from '../../../services/user.service';
import { MenuProfileComponent } from '../../components/menu-profile/menu-profile.component';




@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, UserComponent, SummaryComponent,
     JobExperienceComponent, SkillsComponent, AcademicBackgroundComponent, UserComponent , MenuProfileComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent {

}
