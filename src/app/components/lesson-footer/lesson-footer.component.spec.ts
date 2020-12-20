import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFooterComponent } from './lesson-footer.component';

describe('LessonFooterComponent', () => {
  let component: LessonFooterComponent;
  let fixture: ComponentFixture<LessonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
