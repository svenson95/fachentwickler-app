import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCardPage } from './index-card.page';

describe('IndexCardPage', () => {
  let component: IndexCardPage;
  let fixture: ComponentFixture<IndexCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCardPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
