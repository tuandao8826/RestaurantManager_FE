import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishIndexComponent } from './dish-index.component';

describe('DishIndexComponent', () => {
  let component: DishIndexComponent;
  let fixture: ComponentFixture<DishIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
