import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelectProductComponent } from './delect-product.component';

describe('DelectProductComponent', () => {
  let component: DelectProductComponent;
  let fixture: ComponentFixture<DelectProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelectProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
