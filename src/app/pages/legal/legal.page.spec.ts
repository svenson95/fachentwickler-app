import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPage } from './legal.page';

describe('LegalPage', () => {
  let component: LegalPage;
  let fixture: ComponentFixture<LegalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
