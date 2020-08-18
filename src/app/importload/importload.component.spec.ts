import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportloadComponent } from './importload.component';

describe('ImportloadComponent', () => {
  let component: ImportloadComponent;
  let fixture: ComponentFixture<ImportloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
