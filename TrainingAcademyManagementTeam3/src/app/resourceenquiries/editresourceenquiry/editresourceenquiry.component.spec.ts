import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresourceenquiryComponent } from './editresourceenquiry.component';

describe('EditresourceenquiryComponent', () => {
  let component: EditresourceenquiryComponent;
  let fixture: ComponentFixture<EditresourceenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditresourceenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditresourceenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
