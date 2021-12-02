import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceenquiriesComponent } from './resourceenquiries.component';

describe('ResourceenquiriesComponent', () => {
  let component: ResourceenquiriesComponent;
  let fixture: ComponentFixture<ResourceenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
