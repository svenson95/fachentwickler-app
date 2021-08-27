import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSimulatorPage } from './audit-simulator.page';

describe('AuditSimulatorPage', () => {
  let component: AuditSimulatorPage;
  let fixture: ComponentFixture<AuditSimulatorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditSimulatorPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSimulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
