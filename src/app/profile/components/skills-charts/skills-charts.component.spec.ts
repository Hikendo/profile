import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsChartsComponent } from './skills-charts.component';

describe('SkillsChartsComponent', () => {
  let component: SkillsChartsComponent;
  let fixture: ComponentFixture<SkillsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
