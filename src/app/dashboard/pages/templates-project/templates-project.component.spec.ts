import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesProjectComponent } from './templates-project.component';

describe('TemplatesProjectComponent', () => {
  let component: TemplatesProjectComponent;
  let fixture: ComponentFixture<TemplatesProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
