import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceindividualviewComponent } from './resourceindividualview.component';

describe('ResourceindividualviewComponent', () => {
  let component: ResourceindividualviewComponent;
  let fixture: ComponentFixture<ResourceindividualviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceindividualviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceindividualviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
