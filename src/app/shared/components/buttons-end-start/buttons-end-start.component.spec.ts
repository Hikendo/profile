import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsEndStartComponent } from './buttons-end-start.component';

describe('ButtonsEndStartComponent', () => {
  let component: ButtonsEndStartComponent;
  let fixture: ComponentFixture<ButtonsEndStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsEndStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsEndStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
