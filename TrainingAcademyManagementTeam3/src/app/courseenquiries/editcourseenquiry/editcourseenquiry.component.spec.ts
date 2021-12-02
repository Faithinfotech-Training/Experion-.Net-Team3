import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcourseenquiryComponent } from './editcourseenquiry.component';

describe('EditcourseenquiryComponent', () => {
  let component: EditcourseenquiryComponent;
  let fixture: ComponentFixture<EditcourseenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcourseenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcourseenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
