import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerialNumberComponent } from './add-serial-number.component';

describe('AddSerialNumberComponent', () => {
  let component: AddSerialNumberComponent;
  let fixture: ComponentFixture<AddSerialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSerialNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
