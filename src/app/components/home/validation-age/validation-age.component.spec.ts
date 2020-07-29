import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAgeComponent } from './validation-age.component';

describe('ValidationAgeComponent', () => {
  let component: ValidationAgeComponent;
  let fixture: ComponentFixture<ValidationAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
