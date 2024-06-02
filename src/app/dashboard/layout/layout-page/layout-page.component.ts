import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadComponent } from '../../../shared/components/head/head.component';
import { BackgroundComponent } from '../../../shared/components/background/background.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule, HeadComponent, BackgroundComponent, FooterComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export default class LayoutPageComponent {

}
