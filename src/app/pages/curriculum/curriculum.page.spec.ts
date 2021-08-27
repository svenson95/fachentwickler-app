import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumPage } from './curriculum.page';

describe('CurriculumPage', () => {
  let component: CurriculumPage;
  let fixture: ComponentFixture<CurriculumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
