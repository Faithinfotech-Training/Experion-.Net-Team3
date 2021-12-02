import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceenquiryviewComponent } from './resourceenquiryview.component';

describe('ResourceenquiryviewComponent', () => {
  let component: ResourceenquiryviewComponent;
  let fixture: ComponentFixture<ResourceenquiryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceenquiryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceenquiryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
