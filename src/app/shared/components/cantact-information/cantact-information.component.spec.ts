import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantactInformationComponent } from './cantact-information.component';

describe('CantactInformationComponent', () => {
  let component: CantactInformationComponent;
  let fixture: ComponentFixture<CantactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantactInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
