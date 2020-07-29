import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsSignUpComponent } from './girls-sign-up.component';

describe('GirlsSignUpComponent', () => {
  let component: GirlsSignUpComponent;
  let fixture: ComponentFixture<GirlsSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
