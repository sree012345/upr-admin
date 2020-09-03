import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandProtectionComponent } from './brand-protection.component';

describe('BrandProtectionComponent', () => {
  let component: BrandProtectionComponent;
  let fixture: ComponentFixture<BrandProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
