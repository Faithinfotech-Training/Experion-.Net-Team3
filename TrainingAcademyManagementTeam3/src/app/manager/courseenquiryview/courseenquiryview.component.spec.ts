import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseenquiryviewComponent } from './courseenquiryview.component';

describe('CourseenquiryviewComponent', () => {
  let component: CourseenquiryviewComponent;
  let fixture: ComponentFixture<CourseenquiryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseenquiryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseenquiryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
