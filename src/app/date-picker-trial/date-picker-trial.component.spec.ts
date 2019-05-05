import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerTrialComponent } from './date-picker-trial.component';

describe('DatePickerTrialComponent', () => {
  let component: DatePickerTrialComponent;
  let fixture: ComponentFixture<DatePickerTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
