import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import  UserComponent  from '../../pages/user/user.component';
import SummaryComponent from '../../pages/summary/summary.component';
import JobExperienceComponent from '../../pages/job-experience/job-experience.component';
import SkillsComponent from '../../pages/skills/skills.component';
import AcademicBackgroundComponent from '../../pages/academic-background/academic-background.component';
import { MenuProfileComponent } from '../../components/menu-profile/menu-profile.component';




@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, UserComponent, SummaryComponent,
     JobExperienceComponent, SkillsComponent, AcademicBackgroundComponent, UserComponent , MenuProfileComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
   /* setTimeout(() => {
      this.router.navigate(['/dashboard/profile/info-user']);
    }, 0);*/
  }

}
