import { Component, computed, inject, signal } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router"
import { UserService } from '../../../services/user.service';
import { CommonModule, Location  } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-image-alone',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './image-alone.component.html',
  styleUrl: './image-alone.component.css'
})
export default class ImageAloneComponent {

  public id?:number;
  constructor(private _activeRouter: ActivatedRoute
    , private location: Location
  ) {}

  private userProfile =inject(UserService);


  goBack() {
    this.location.back();
  }


  public user=computed(()=> this.userProfile.user()?.profesionalProfile.courses);
  public imageCourse= computed(()=> {return this.user()?.find(e=> e.id===Number(this.id))});

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {      this.id = params["id"];

      console.log(typeof(this.id));
      console.log(this.user());
      console.log(this.imageCourse());

  });
 }
}
