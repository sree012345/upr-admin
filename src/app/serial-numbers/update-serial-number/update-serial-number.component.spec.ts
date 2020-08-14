import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSerialNumberComponent } from './update-serial-number.component';

describe('UpdateSerialNumberComponent', () => {
  let component: UpdateSerialNumberComponent;
  let fixture: ComponentFixture<UpdateSerialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSerialNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
