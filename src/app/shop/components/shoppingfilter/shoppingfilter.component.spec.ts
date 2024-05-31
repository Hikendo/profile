import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingfilterComponent } from './shoppingfilter.component';

describe('ShoppingfilterComponent', () => {
  let component: ShoppingfilterComponent;
  let fixture: ComponentFixture<ShoppingfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
