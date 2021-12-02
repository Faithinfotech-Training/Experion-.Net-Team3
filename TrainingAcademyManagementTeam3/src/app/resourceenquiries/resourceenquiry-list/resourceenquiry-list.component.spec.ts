import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceenquiryListComponent } from './resourceenquiry-list.component';

describe('ResourceenquiryListComponent', () => {
  let component: ResourceenquiryListComponent;
  let fixture: ComponentFixture<ResourceenquiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceenquiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceenquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
