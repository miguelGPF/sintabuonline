import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsLoginComponent } from './girls-login.component';

describe('GirlsLoginComponent', () => {
  let component: GirlsLoginComponent;
  let fixture: ComponentFixture<GirlsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
