import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFilesPage } from './teacher-files.page';

describe('TeacherFilesPage', () => {
  let component: TeacherFilesPage;
  let fixture: ComponentFixture<TeacherFilesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherFilesPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
