import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleLoginComponent } from './people-login.component';

describe('PeopleLoginComponent', () => {
  let component: PeopleLoginComponent;
  let fixture: ComponentFixture<PeopleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
