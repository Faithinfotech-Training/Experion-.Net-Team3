import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistLeadComponent } from './courselist-lead.component';

describe('CourselistLeadComponent', () => {
  let component: CourselistLeadComponent;
  let fixture: ComponentFixture<CourselistLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
