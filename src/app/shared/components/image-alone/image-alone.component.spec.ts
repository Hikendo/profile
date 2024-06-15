import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAloneComponent } from './image-alone.component';

describe('ImageAloneComponent', () => {
  let component: ImageAloneComponent;
  let fixture: ComponentFixture<ImageAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
