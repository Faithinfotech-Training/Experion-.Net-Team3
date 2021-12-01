import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespipelinesComponent } from './salespipelines.component';

describe('SalespipelinesComponent', () => {
  let component: SalespipelinesComponent;
  let fixture: ComponentFixture<SalespipelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespipelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
