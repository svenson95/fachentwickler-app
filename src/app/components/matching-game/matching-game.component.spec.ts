import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingGameComponent } from './matching-game.component';

describe('MatchingGameComponent', () => {
  let component: MatchingGameComponent;
  let fixture: ComponentFixture<MatchingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
