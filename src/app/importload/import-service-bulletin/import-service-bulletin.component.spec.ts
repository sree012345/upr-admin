import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportServiceBulletinComponent } from './import-service-bulletin.component';

describe('ImportServiceBulletinComponent', () => {
  let component: ImportServiceBulletinComponent;
  let fixture: ComponentFixture<ImportServiceBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportServiceBulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportServiceBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
