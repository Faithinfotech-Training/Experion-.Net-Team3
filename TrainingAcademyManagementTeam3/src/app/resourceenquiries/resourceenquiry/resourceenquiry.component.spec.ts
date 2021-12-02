import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceenquiryComponent } from './resourceenquiry.component';

describe('ResourceenquiryComponent', () => {
  let component: ResourceenquiryComponent;
  let fixture: ComponentFixture<ResourceenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
