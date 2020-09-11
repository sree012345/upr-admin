import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDocumentAndLinkComponent } from './import-document-and-link.component';

describe('ImportDocumentAndLinkComponent', () => {
  let component: ImportDocumentAndLinkComponent;
  let fixture: ComponentFixture<ImportDocumentAndLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDocumentAndLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDocumentAndLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
