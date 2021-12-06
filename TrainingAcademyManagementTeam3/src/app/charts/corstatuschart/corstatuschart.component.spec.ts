import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorstatuschartComponent } from './corstatuschart.component';

describe('CorstatuschartComponent', () => {
  let component: CorstatuschartComponent;
  let fixture: ComponentFixture<CorstatuschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorstatuschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorstatuschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
