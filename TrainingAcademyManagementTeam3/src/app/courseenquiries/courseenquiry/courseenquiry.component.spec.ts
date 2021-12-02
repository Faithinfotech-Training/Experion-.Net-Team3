import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseenquiryComponent } from './courseenquiry.component';

describe('CourseenquiryComponent', () => {
  let component: CourseenquiryComponent;
  let fixture: ComponentFixture<CourseenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
