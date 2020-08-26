import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBulletinComponent } from './service-bulletin.component';

describe('ServiceBulletinComponent', () => {
  let component: ServiceBulletinComponent;
  let fixture: ComponentFixture<ServiceBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
