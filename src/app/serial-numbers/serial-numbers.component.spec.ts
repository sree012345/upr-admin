import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumbersComponent } from './serial-numbers.component';

describe('SerialNumbersComponent', () => {
  let component: SerialNumbersComponent;
  let fixture: ComponentFixture<SerialNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
