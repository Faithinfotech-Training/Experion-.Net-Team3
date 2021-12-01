import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcelistLeadComponent } from './resourcelist-lead.component';

describe('ResourcelistLeadComponent', () => {
  let component: ResourcelistLeadComponent;
  let fixture: ComponentFixture<ResourcelistLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcelistLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcelistLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
