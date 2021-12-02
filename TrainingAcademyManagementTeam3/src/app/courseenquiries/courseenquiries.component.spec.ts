import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseenquiriesComponent } from './courseenquiries.component';

describe('CourseenquiriesComponent', () => {
  let component: CourseenquiriesComponent;
  let fixture: ComponentFixture<CourseenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
