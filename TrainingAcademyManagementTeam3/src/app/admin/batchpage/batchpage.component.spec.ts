import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchpageComponent } from './batchpage.component';

describe('BatchpageComponent', () => {
  let component: BatchpageComponent;
  let fixture: ComponentFixture<BatchpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
