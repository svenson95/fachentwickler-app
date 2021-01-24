import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardsCardComponent } from './indexcards-card.component';

describe('IndexCardsCardComponent', () => {
  let component: IndexcardsCardComponent;
  let fixture: ComponentFixture<IndexcardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcardsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
