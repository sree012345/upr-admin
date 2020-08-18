import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticScanComponent } from './authentic-scan.component';

describe('AuthenticScanComponent', () => {
  let component: AuthenticScanComponent;
  let fixture: ComponentFixture<AuthenticScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
