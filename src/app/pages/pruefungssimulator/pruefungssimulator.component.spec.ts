import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefungsSimulatorComponent } from './pruefungssimulator.component';

describe('PruefungsSimulatorComponent', () => {
  let component: PruefungsSimulatorComponent;
  let fixture: ComponentFixture<PruefungsSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefungsSimulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefungsSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
