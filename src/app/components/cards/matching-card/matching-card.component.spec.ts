import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingCardComponent } from './matching-card.component';

describe('MatchingCardComponent', () => {
  let component: MatchingCardComponent;
  let fixture: ComponentFixture<MatchingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
