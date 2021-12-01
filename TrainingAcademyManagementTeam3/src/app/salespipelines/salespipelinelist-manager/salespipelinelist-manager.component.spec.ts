import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespipelinelistManagerComponent } from './salespipelinelist-manager.component';

describe('SalespipelinelistManagerComponent', () => {
  let component: SalespipelinelistManagerComponent;
  let fixture: ComponentFixture<SalespipelinelistManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespipelinelistManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespipelinelistManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
