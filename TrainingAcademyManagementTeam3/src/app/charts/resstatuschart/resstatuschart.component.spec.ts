import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResstatuschartComponent } from './resstatuschart.component';

describe('ResstatuschartComponent', () => {
  let component: ResstatuschartComponent;
  let fixture: ComponentFixture<ResstatuschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResstatuschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResstatuschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
