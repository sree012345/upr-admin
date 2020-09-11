import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBrandProtectionComponent } from './import-brand-protection.component';

describe('ImportBrandProtectionComponent', () => {
  let component: ImportBrandProtectionComponent;
  let fixture: ComponentFixture<ImportBrandProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportBrandProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportBrandProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
