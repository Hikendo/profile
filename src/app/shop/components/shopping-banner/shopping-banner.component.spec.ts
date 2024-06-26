import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBannerComponent } from './shopping-banner.component';

describe('ShoppingBannerComponent', () => {
  let component: ShoppingBannerComponent;
  let fixture: ComponentFixture<ShoppingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
