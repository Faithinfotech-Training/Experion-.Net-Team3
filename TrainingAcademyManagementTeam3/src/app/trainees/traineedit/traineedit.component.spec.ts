import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeditComponent } from './traineedit.component';

describe('TraineeditComponent', () => {
  let component: TraineeditComponent;
  let fixture: ComponentFixture<TraineeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
