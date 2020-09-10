import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRecallComponent } from './import-recall.component';

describe('ImportRecallComponent', () => {
  let component: ImportRecallComponent;
  let fixture: ComponentFixture<ImportRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
