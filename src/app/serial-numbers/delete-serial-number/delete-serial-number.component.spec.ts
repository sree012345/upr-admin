import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSerialNumberComponent } from './delete-serial-number.component';

describe('DeleteSerialNumberComponent', () => {
  let component: DeleteSerialNumberComponent;
  let fixture: ComponentFixture<DeleteSerialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSerialNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
