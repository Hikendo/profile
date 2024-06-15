import { Component, Input, Renderer2 } from '@angular/core';
import { Course } from '../../../interfaces/profile';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { PopupServiceService } from '../../../services/popup-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LoadingComponent, CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() course?: Course;
  popupStyle = {};
  constructor(private popupService: PopupServiceService) { }

}
