import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseindividualviewComponent } from './courseindividualview.component';

describe('CourseindividualviewComponent', () => {
  let component: CourseindividualviewComponent;
  let fixture: ComponentFixture<CourseindividualviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseindividualviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseindividualviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
